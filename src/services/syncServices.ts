import {postgresClient  } from '../config/prisma'
import {
  TableSchema,
  SyncableRecord,
  Changes,
  SyncableRecord_sanitizeRecord,
  SyncChanges
} from '../utils/syncTypes'
import { hashPassword } from '../utils/hashpassword'


export class watermelonSync {
    private prisma: typeof postgresClient
  private tables: TableSchema[]
  private readonly tableOrder = [
    'Patient',
    'Clinic',
    'Visit',
    'Interval',
  ]

  constructor(prisma: typeof postgresClient, tables: TableSchema[]) {
    this.prisma = prisma
    this.tables = tables
  }

  async syncPush(clientChange: Changes): Promise<void> {
    console.log('Syncing changes:', clientChange)
    try {
      await this.prisma.$transaction(
        async (tx) => {
          // Process tables in specified order
          for (const tableName of this.tableOrder) {
            if (!clientChange[tableName]) continue

            console.log(`Processing table: ${tableName}`)

              const tableSchema = this.tables.find(
                (table) => table.name === tableName
              )
              if (!tableSchema) {
                console.warn(`Schema not found for table: ${tableName}`)
                continue
              }
              await this.processTableChanges(
                tableName,
                clientChange[tableName],
                tableSchema,
                tx
              )
            
          }
        },
        { timeout: 180000 }
      )
    } catch (error) {
      console.error('Error syncing changes:', error)
      throw error
    }
  }

  private async processTableChanges(
    tableName: string,
    tableChanges: SyncChanges,
    tableSchema: TableSchema,
    tx: any
  ): Promise<void> {
    const model = tx[tableSchema.prismaName]
    if (!model) {
      console.warn(`Model not found for table: ${tableName}`)
      return
    }

    try {
      // Process created records
      if (tableChanges.created?.length) {
        console.log(
          `Creating ${tableChanges.created.length} records in ${tableName}`
        )

        const sanitizedRecords = tableChanges.created.map((record) => {
          return this.sanitizeRecord(record as SyncableRecord)
        })
        await model.createMany({
          data: sanitizedRecords
        })
      }

      // Process updated records
      if (tableChanges.updated?.length) {
        console.log(
          `Updating ${tableChanges.updated.length} records in ${tableName}`
        )
        for (const record of tableChanges.updated) {
          const sanitizedRecord = this.sanitizeRecord(record as SyncableRecord)
          const existing = await model.findUnique({
            where: { id: sanitizedRecord.id }
          })

          if (existing) {
            await model.update({
              where: { id: sanitizedRecord.id },
              data: sanitizedRecord
            })
          } else {
            console.warn(
              `Record ${sanitizedRecord.id} not found in ${tableName}`
            )
          }
        }
      }

      // Process deleted records
      if (tableChanges.deleted?.length) {
        console.log(
          `Soft deleting ${tableChanges.deleted.length} records in ${tableName}`
        )
        for (const id of tableChanges.deleted) {
          await model.update({
            where: { id },
            data: {
              deleted_at: new Date(),
              updated_at: new Date()
            }
          })
        }
      }
    } catch (error) {
      console.error(`Error processing ${tableName}:`, error)
      throw error
    }
  }

  private sanitizeRecord(
    record: SyncableRecord
  ): SyncableRecord_sanitizeRecord {
    const {
      server_createdAt,
      server_updatedAt,
      server_deletedAt,
      created_at,
      updated_at,
      _status,
      _changed,
      ...sanitizedRecord
    } = record

    return sanitizedRecord
  }

  async pullChanges(lastPulledAt: number): Promise<Changes> {
    const changes: Changes = {}
    const lastPulledAt_UTC = new Date(lastPulledAt * 1000).toISOString()

    // Process tables in the specified order for consistency
    for (const tableName of this.tableOrder) {
      const tableSchema = this.tables.find((table) => table.name === tableName)
      if (!tableSchema) continue

      if (tableName === 'sensorvalues') {
        console.log('Skipping table:', tableName)
        continue
      }

      console.log('Pulling changes for table:', tableName)

      changes[tableName] = {
        created: [],
        updated: [],
        deleted: []
      }

      const records = await tableSchema.model.findMany({
        where: {
          server_updatedAt: {
            gt: new Date(lastPulledAt_UTC)
          },
          OR: [
            { server_deletedAt: null },
            { server_deletedAt: { gt: new Date(lastPulledAt_UTC) } }
          ]
        },
        orderBy: {
          server_updatedAt: 'asc'
        }
      })

      for (const record of records) {
        if (record.server_deletedAt) {
          changes[tableName].deleted.push(record.id)
        } else if (
          new Date(record.server_createdAt) > new Date(lastPulledAt_UTC)
        ) {
          changes[tableName].updated.push(this.sanitizeRecord(record))
        } else if (
          new Date(record.server_updatedAt) > new Date(lastPulledAt_UTC)
        ) {
          changes[tableName].updated.push(this.sanitizeRecord(record))
        }
      }
    }

    return changes
  }
}
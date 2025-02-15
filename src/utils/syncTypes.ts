interface SyncableRecord {
  id: string
  server_createdAt: Date
  server_updatedAt: Date
  server_deletedAt?: Date | null
  _status?: string
  _changed?: string
  [key: string]: any
}

interface SyncableRecord_sanitizeRecord {
  id: string
  [key: string]: any
}

interface TableSchema {
  name: string
  prismaName: string
  model: any
}

interface SyncChanges {
  created: Record<string, SyncableRecord>[]
  updated: Record<string, SyncableRecord>[]
  deleted: string[]
}

interface Changes {
  [tableName: string]: SyncChanges
}

export {
  SyncableRecord,
  TableSchema,
  SyncChanges,
  Changes,
  SyncableRecord_sanitizeRecord
}
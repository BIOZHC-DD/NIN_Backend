
import { Request, Response } from 'express'

import { postgresClient } from "../config/prisma";
import { watermelonSync } from '../services/syncServices'


const prisma = postgresClient

const syncService = new watermelonSync(prisma, [
  { name: 'Patient', model: prisma.patient, prismaName: 'patient' },
  { name: 'Visit', model: prisma.visit, prismaName: 'visit' },
  { name: 'Clinic', model: prisma.clinic, prismaName: 'clinic' },
])

const pushChanges = async (req: Request, res: Response) => {
  console.log('Raw query:', req.query)
  console.log('query', req.query.last_pulled_at)
  const lastPulledAt = req.query.last_pulled_at
    ? Number(req.query.last_pulled_at)
    : 0
  const isLoginSync = req.query.isLoginSync === 'true'

  console.log('last_pulled_at', lastPulledAt)
  console.log('isLoginSync', isLoginSync)

  try {
    const result = await syncService.pullChanges(lastPulledAt)
    const timestamp = Math.floor(Date.now() / 1000)

    const response = {
      timestamp,
      changes: result
    }

    res.json(response)
  } catch (error) {
    console.error('Sync failed', error)
    res.status(500).json({ error: 'Sync failed' })
  }
}

const pullChanges = async (req: Request, res: Response) => {
  const changes = req.body
  try {
    await syncService.syncPush(changes.changes)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Sync failed' })
  }
}

export default { pushChanges, pullChanges }
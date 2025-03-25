import { Request, Response } from 'express';
import prisma from '../config/client';
import { watermelonSync } from '../services/syncServices';

const syncService = new watermelonSync(prisma, [
  { name: 'patients', model: prisma.patient, prismaName: 'patient' },
  { name: 'clinicals', model: prisma.clinic, prismaName: 'clinic' },
  { name: 'visits', model: prisma.visit, prismaName: 'visit' },
  { name: 'intervals', model: prisma.interval, prismaName: 'interval' },
]);

export const pushChanges = async (req: Request, res: Response) => {
  console.log('Raw query:', req.query);
  console.log('query', req.query.last_pulled_at);
  const lastPulledAt = req.query.last_pulled_at
    ? Number(req.query.last_pulled_at)
    : 0;
  const isLoginSync = req.query.isLoginSync === 'true';

  console.log('last_pulled_at', lastPulledAt);
  console.log('isLoginSync', isLoginSync);

  try {
    const result = await syncService.pullChanges(lastPulledAt);
    const timestamp = Math.floor(Date.now() / 1000);

    const response = {
      timestamp,
      changes: result,
    };

    console.log(response);

    res.json(response);
  } catch (error) {
    console.error('Sync failed', error);
    res.status(500).json({ error: 'Sync failed' });
  }
};

export const pullChanges = async (req: Request, res: Response) => {
  const changes = req.body;
  try {
    await syncService.syncPush(changes.changes);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Sync failed' });
  }
};

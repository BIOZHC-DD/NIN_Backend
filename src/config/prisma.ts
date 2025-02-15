import { PrismaClient as PostgresPrismaClient } from '../../prisma/generated/postgres-client';
import { PrismaClient as TimescaleClient } from '../../prisma/generated/timescale-client';

export const postgresClient: PostgresPrismaClient = new PostgresPrismaClient();
export const timescaleClient: TimescaleClient = new TimescaleClient();
import { PrismaClient as PostgresClient } from '../../prisma/generated/postgres-client';
import { PrismaClient as TimescaleClient } from '../../prisma/generated/timescale-client';

export const postgresClient = new PostgresClient();
export const timescaleClient = new TimescaleClient();
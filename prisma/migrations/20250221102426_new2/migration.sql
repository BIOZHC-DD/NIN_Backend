/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Clinic` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Clinic` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Interval` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Interval` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Visit` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Visit` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Interval_visit_id_intervalType_key";

-- AlterTable
ALTER TABLE "Clinic" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "server_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "server_deletedAt" TIMESTAMP(3),
ADD COLUMN     "server_updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Interval" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "server_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "server_deletedAt" TIMESTAMP(3),
ADD COLUMN     "server_updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "server_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "server_deletedAt" TIMESTAMP(3),
ADD COLUMN     "server_updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Visit" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "server_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "server_deletedAt" TIMESTAMP(3),
ADD COLUMN     "server_updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "Clinic_server_updatedAt_idx" ON "Clinic"("server_updatedAt");

-- CreateIndex
CREATE INDEX "Clinic_server_deletedAt_idx" ON "Clinic"("server_deletedAt");

-- CreateIndex
CREATE INDEX "Interval_server_updatedAt_idx" ON "Interval"("server_updatedAt");

-- CreateIndex
CREATE INDEX "Interval_server_deletedAt_idx" ON "Interval"("server_deletedAt");

-- CreateIndex
CREATE INDEX "Patient_server_updatedAt_idx" ON "Patient"("server_updatedAt");

-- CreateIndex
CREATE INDEX "Patient_server_deletedAt_idx" ON "Patient"("server_deletedAt");

-- CreateIndex
CREATE INDEX "Visit_server_updatedAt_idx" ON "Visit"("server_updatedAt");

-- CreateIndex
CREATE INDEX "Visit_server_deletedAt_idx" ON "Visit"("server_deletedAt");

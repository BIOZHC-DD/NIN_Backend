/*
  Warnings:

  - You are about to drop the column `recentHealthIssue` on the `Clinic` table. All the data in the column will be lost.
  - Added the required column `reacentHealthIssue` to the `Clinic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clinic" DROP COLUMN "recentHealthIssue",
ADD COLUMN     "reacentHealthIssue" TEXT NOT NULL;

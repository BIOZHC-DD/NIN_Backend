/*
  Warnings:

  - You are about to drop the column `homoglobin` on the `Clinic` table. All the data in the column will be lost.
  - Added the required column `hemoglobin` to the `Clinic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clinic" DROP COLUMN "homoglobin",
ADD COLUMN     "hemoglobin" INTEGER NOT NULL;

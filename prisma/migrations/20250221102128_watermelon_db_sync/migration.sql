/*
  Warnings:

  - The primary key for the `Clinic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cid` on the `Clinic` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Clinic` table. All the data in the column will be lost.
  - You are about to drop the column `pid` on the `Clinic` table. All the data in the column will be lost.
  - You are about to drop the column `vid` on the `Clinic` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Clinic` table. All the data in the column will be lost.
  - The primary key for the `Patient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `pid` on the `Patient` table. All the data in the column will be lost.
  - The primary key for the `Visit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `isClinicalCollected` on the `Visit` table. All the data in the column will be lost.
  - You are about to drop the column `isDataCollected` on the `Visit` table. All the data in the column will be lost.
  - You are about to drop the column `pid` on the `Visit` table. All the data in the column will be lost.
  - You are about to drop the column `vid` on the `Visit` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Clinic` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[patient_id]` on the table `Clinic` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patient_id` to the `Visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visitDate` to the `Visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visitType` to the `Visit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Clinic" DROP CONSTRAINT "Clinic_vid_fkey";

-- DropForeignKey
ALTER TABLE "Visit" DROP CONSTRAINT "Visit_pid_fkey";

-- DropIndex
DROP INDEX "Clinic_vid_key";

-- AlterTable
ALTER TABLE "Clinic" DROP CONSTRAINT "Clinic_pkey",
DROP COLUMN "cid",
DROP COLUMN "height",
DROP COLUMN "pid",
DROP COLUMN "vid",
DROP COLUMN "weight",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "patient_id" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "temperature" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "alcoholType" SET DATA TYPE TEXT,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Clinic_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_pkey",
DROP COLUMN "name",
DROP COLUMN "pid",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "dateOfBirth" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "height" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Patient_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Visit" DROP CONSTRAINT "Visit_pkey",
DROP COLUMN "isClinicalCollected",
DROP COLUMN "isDataCollected",
DROP COLUMN "pid",
DROP COLUMN "vid",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "patient_id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "visitDate" TEXT NOT NULL,
ADD COLUMN     "visitType" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Visit_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "INTERVALS" (
    "id" TEXT NOT NULL,
    "visit_id" TEXT NOT NULL,
    "intervalType" TEXT NOT NULL,
    "interval_tag" INTEGER NOT NULL,
    "configuration" TEXT NOT NULL,
    "frequencies" TEXT NOT NULL,
    "dataPoints" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "INTERVALS_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "INTERVALS_visit_id_intervalType_key" ON "INTERVALS"("visit_id", "intervalType");

-- CreateIndex
CREATE UNIQUE INDEX "Clinic_id_key" ON "Clinic"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Clinic_patient_id_key" ON "Clinic"("patient_id");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clinic" ADD CONSTRAINT "Clinic_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

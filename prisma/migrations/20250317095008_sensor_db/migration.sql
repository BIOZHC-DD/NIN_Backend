/*
  Warnings:

  - You are about to drop the `Clinic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Interval` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Patient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Visit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `primeUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Clinic" DROP CONSTRAINT "Clinic_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "Visit" DROP CONSTRAINT "Visit_patient_id_fkey";

-- DropTable
DROP TABLE "Clinic";

-- DropTable
DROP TABLE "Interval";

-- DropTable
DROP TABLE "Patient";

-- DropTable
DROP TABLE "Visit";

-- DropTable
DROP TABLE "primeUser";

-- CreateTable
CREATE TABLE "BiosensorData" (
    "id" TEXT NOT NULL,
    "vid" TEXT NOT NULL,
    "config" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "bioImpedance" DOUBLE PRECISION NOT NULL,
    "phaseAngle" DOUBLE PRECISION NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BiosensorData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemperatureData" (
    "id" TEXT NOT NULL,
    "vid" TEXT NOT NULL,
    "config" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemperatureData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GsrData" (
    "id" TEXT NOT NULL,
    "vid" TEXT NOT NULL,
    "config" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "gsr" DOUBLE PRECISION NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GsrData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GlucoseData" (
    "id" TEXT NOT NULL,
    "vid" TEXT NOT NULL,
    "config" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "glucose" DOUBLE PRECISION NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GlucoseData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BiosensorData_config_idx" ON "BiosensorData"("config");

-- CreateIndex
CREATE INDEX "TemperatureData_config_idx" ON "TemperatureData"("config");

-- CreateIndex
CREATE INDEX "GsrData_config_idx" ON "GsrData"("config");

-- CreateIndex
CREATE INDEX "GlucoseData_config_idx" ON "GlucoseData"("config");

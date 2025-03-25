/*
  Warnings:

  - You are about to drop the `BiosensorData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GlucoseData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GsrData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TemperatureData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BiosensorData";

-- DropTable
DROP TABLE "GlucoseData";

-- DropTable
DROP TABLE "GsrData";

-- DropTable
DROP TABLE "TemperatureData";

-- CreateTable
CREATE TABLE "primeUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "primeUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "contactInformation" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "fhirId" TEXT,
    "abhaId" TEXT,
    "server_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "server_updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "server_deletedAt" TIMESTAMP(3),

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visit" (
    "id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "visitDate" TEXT NOT NULL,
    "visitNotes" TEXT,
    "visitType" TEXT NOT NULL,
    "encounterfhirid" TEXT,
    "server_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "server_updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "server_deletedAt" TIMESTAMP(3),

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interval" (
    "id" TEXT NOT NULL,
    "visit_id" TEXT NOT NULL,
    "intervalType" TEXT NOT NULL,
    "interval_tag" INTEGER NOT NULL,
    "configuration" TEXT NOT NULL,
    "frequencies" TEXT NOT NULL,
    "dataPoints" TEXT NOT NULL,
    "server_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "server_updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "server_deletedAt" TIMESTAMP(3),

    CONSTRAINT "Interval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clinic" (
    "id" TEXT NOT NULL,
    "patient_id" TEXT,
    "bloodGroup" TEXT NOT NULL,
    "antigenStatus" TEXT NOT NULL,
    "systolic" INTEGER NOT NULL,
    "diastolic" INTEGER NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "smokingType" TEXT NOT NULL,
    "overAllYearOfSmoking" INTEGER NOT NULL,
    "dailyConsumption" INTEGER NOT NULL,
    "smokingIndex" INTEGER NOT NULL,
    "alcoholFreeDays" INTEGER NOT NULL,
    "alcoholType" TEXT NOT NULL,
    "alcoholConsumption" INTEGER NOT NULL,
    "hemoglobin" INTEGER NOT NULL,
    "reacentHealthIssue" TEXT NOT NULL,
    "hereditaryHistory" TEXT NOT NULL,
    "observationfhirid" TEXT,
    "server_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "server_updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "server_deletedAt" TIMESTAMP(3),

    CONSTRAINT "Clinic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "primeUser_email_key" ON "primeUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- CreateIndex
CREATE INDEX "Patient_server_updatedAt_idx" ON "Patient"("server_updatedAt");

-- CreateIndex
CREATE INDEX "Patient_server_deletedAt_idx" ON "Patient"("server_deletedAt");

-- CreateIndex
CREATE INDEX "Visit_server_updatedAt_idx" ON "Visit"("server_updatedAt");

-- CreateIndex
CREATE INDEX "Visit_server_deletedAt_idx" ON "Visit"("server_deletedAt");

-- CreateIndex
CREATE INDEX "Interval_server_updatedAt_idx" ON "Interval"("server_updatedAt");

-- CreateIndex
CREATE INDEX "Interval_server_deletedAt_idx" ON "Interval"("server_deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Clinic_id_key" ON "Clinic"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Clinic_patient_id_key" ON "Clinic"("patient_id");

-- CreateIndex
CREATE INDEX "Clinic_server_updatedAt_idx" ON "Clinic"("server_updatedAt");

-- CreateIndex
CREATE INDEX "Clinic_server_deletedAt_idx" ON "Clinic"("server_deletedAt");

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clinic" ADD CONSTRAINT "Clinic_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

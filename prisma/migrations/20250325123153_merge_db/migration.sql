CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;
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

-- CreateTable
CREATE TABLE "BiosensorData" (
    "id" TEXT NOT NULL,
    "vid" TEXT NOT NULL,
    "config" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "bioImpedance" DOUBLE PRECISION NOT NULL,
    "phaseAngle" DOUBLE PRECISION NOT NULL,
    "collected_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "TemperatureData" (
    "id" TEXT NOT NULL,
    "vid" TEXT NOT NULL,
    "config" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "collected_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "GsrData" (
    "id" TEXT NOT NULL,
    "vid" TEXT NOT NULL,
    "config" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "gsr" DOUBLE PRECISION NOT NULL,
    "collected_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "GlucoseData" (
    "id" TEXT NOT NULL,
    "vid" TEXT NOT NULL,
    "config" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "glucose" DOUBLE PRECISION NOT NULL,
    "collected_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
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

-- CreateIndex
CREATE UNIQUE INDEX "BiosensorData_id_collected_at_key" ON "BiosensorData"("id", "collected_at");

-- CreateIndex
CREATE UNIQUE INDEX "TemperatureData_id_collected_at_key" ON "TemperatureData"("id", "collected_at");

-- CreateIndex
CREATE UNIQUE INDEX "GsrData_id_collected_at_key" ON "GsrData"("id", "collected_at");

-- CreateIndex
CREATE UNIQUE INDEX "GlucoseData_id_collected_at_key" ON "GlucoseData"("id", "collected_at");

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interval" ADD CONSTRAINT "Interval_visit_id_fkey" FOREIGN KEY ("visit_id") REFERENCES "Visit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clinic" ADD CONSTRAINT "Clinic_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BiosensorData" ADD CONSTRAINT "BiosensorData_vid_fkey" FOREIGN KEY ("vid") REFERENCES "Visit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemperatureData" ADD CONSTRAINT "TemperatureData_vid_fkey" FOREIGN KEY ("vid") REFERENCES "Visit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GsrData" ADD CONSTRAINT "GsrData_vid_fkey" FOREIGN KEY ("vid") REFERENCES "Visit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GlucoseData" ADD CONSTRAINT "GlucoseData_vid_fkey" FOREIGN KEY ("vid") REFERENCES "Visit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


SELECT create_hypertable('"BiosensorData"', 'collected_at');
SELECT create_hypertable('"TemperatureData"', 'collected_at');
SELECT create_hypertable('"GsrData"', 'collected_at');
SELECT create_hypertable('"GlucoseData"', 'collected_at');
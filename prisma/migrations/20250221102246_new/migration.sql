/*
  Warnings:

  - You are about to drop the `INTERVALS` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "INTERVALS";

-- CreateTable
CREATE TABLE "Interval" (
    "id" TEXT NOT NULL,
    "visit_id" TEXT NOT NULL,
    "intervalType" TEXT NOT NULL,
    "interval_tag" INTEGER NOT NULL,
    "configuration" TEXT NOT NULL,
    "frequencies" TEXT NOT NULL,
    "dataPoints" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Interval_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Interval_visit_id_intervalType_key" ON "Interval"("visit_id", "intervalType");

import { timescaleClient } from "../config/prisma";

export async function processBioSensorData(message: any) {
  try {
    if (!message || !message.visit_id || !message.data || !Array.isArray(message.data)) {
      console.error('Invalid message format:', message);
      return;
    }

    // Prepare data for batch insert
    const bioSensorRecords = message.data.map((sensor: any) => ({
      vid: message.visit_id,
      config: message.config || 'default',
      frequency: message.frequency || 0,
      bioImpedance: sensor.bioImpedance,
      phaseAngle: sensor.phaseAngle,
      time: new Date(sensor.time),
    }));

    // Insert data into Prisma database
    await timescaleClient.biosensorData.createMany({
      data: bioSensorRecords,
      skipDuplicates: true, // Avoid duplicate inserts
    });

    console.log(`Successfully processed ${bioSensorRecords.length} bioSensor records for visit_id: ${message.visit_id}`);
  } catch (error: any) {
    console.error('Error processing bioSensor data:', error.message);
  }
}

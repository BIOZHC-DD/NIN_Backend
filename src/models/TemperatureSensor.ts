import { timescaleClient } from "../config/prisma";

export async function processTemperatureData(message: any) {
  try {
    if (!message || !message.visit_id || !message.data || !Array.isArray(message.data)) {
      console.error('Invalid message format:', message);
      return;
    }

    // Prepare data for batch insert
    const temperatureRecords = message.data.map((sensor: any) => ({
      vid: message.visit_id,
      config: message.config || 'default',
      frequency: message.frequency || 0,
      temperature: sensor.temperature,
      time: new Date(sensor.time),
    }));

    // Insert data into Prisma database
    await timescaleClient.temperatureData.createMany({
      data: temperatureRecords,
      skipDuplicates: true,
    });

    console.log(`Successfully processed ${temperatureRecords.length} bioSensor records for visit_id: ${message.visit_id}`);
  } catch (error: any) {
    console.error('Error processing bioSensor data:', error.message);
  }
}

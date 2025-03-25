import prisma from '../config/client';

export async function processGlucoseData(message: any) {
  try {
    if (
      !message ||
      !message.visit_id ||
      !message.data ||
      !Array.isArray(message.data)
    ) {
      console.error('Invalid message format:', message);
      return;
    }

    // Prepare data for batch insert
    const GlucoseRecords = message.data.map((sensor: any) => ({
      vid: message.visit_id,
      config: message.config || 'default',
      frequency: message.frequency || 0,

      glucose: sensor.glucose,
      time: new Date(sensor.time),
    }));

    // Insert data into Prisma database
    await prisma.glucoseData.createMany({
      data: GlucoseRecords,
      skipDuplicates: true, // Avoid duplicate inserts
    });

    console.log(
      `Successfully processed ${GlucoseRecords.length} bioSensor records for visit_id: ${message.visit_id}`,
    );
  } catch (error: any) {
    console.error('Error processing bioSensor data:', error.message);
  }
}

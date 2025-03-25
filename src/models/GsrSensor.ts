import prisma from '../config/client';

export async function processGsrData(message: any) {
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
    const GsrRecords = message.data.map((sensor: any) => ({
      vid: message.visit_id,
      config: message.config || 'default',
      frequency: message.frequency || 0,
      gsr: sensor.gsr,
      time: new Date(sensor.time),
    }));

    // Insert data into Prisma database
    await prisma.gsrData.createMany({
      data: GsrRecords,
      skipDuplicates: true,
    });

    console.log(
      `Successfully processed ${GsrRecords.length} bioSensor records for visit_id: ${message.visit_id}`,
    );
  } catch (error: any) {
    console.error('Error processing bioSensor data:', error.message);
  }
}

import { timescaleClient } from '../config/prisma';
import { Payload, BioSensor } from '../types';
export async function processBioSensorData(payload: Payload) {
  const { data } = payload;

  try {
    // Prepare data for batch insert
    const bioSensorRecords = data.map((sensor: BioSensor) => ({
      vid: sensor.visit_id,
      config: sensor.config || 'default',
      frequency: sensor.frequency || 0,
      bioImpedance: sensor.bioImpedance,
      phaseAngle: sensor.phaseAngle,
      time: new Date(sensor.created_at),
    }));

    // Insert data into Prisma database
    await timescaleClient.biosensorData.createMany({
      data: bioSensorRecords,
      skipDuplicates: false,
    });
  } catch (error: any) {
    console.error('Error processing bioSensor data:', error.message);
  }
}

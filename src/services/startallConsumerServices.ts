
import { startConsumer } from "./ConsumersServices";


const SENSOR_TYPES = ['bioSensor', 'temSensor', 'gsrSensor', 'gluSensor'];

export async function startAllConsumers() {
  for (const sensorType of SENSOR_TYPES) {
    await startConsumer(sensorType);
  }
}

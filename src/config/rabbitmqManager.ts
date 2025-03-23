import amqp from 'amqplib';
import { Payload } from '../types';
const RABBITMQ_URL = 'amqp://myuser:mypassword@rabbitmq/';

const sensorChannels = new Map<string, amqp.Channel>();

let connection: any;

export async function initializeConnection() {
  let retries = 5;
  while (retries > 0) {
    try {
      if (!connection) {
        connection = await amqp.connect(RABBITMQ_URL);
        console.log('Connected to RabbitMQ!');
      }
      return;
    } catch (error) {
      retries -= 1;
      console.log(`RabbitMQ connection failed, retries left: ${retries}`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
  throw new Error('Failed to connect to RabbitMQ');
}

export async function addSensorType(sensorType: string) {
  if (sensorChannels.has(sensorType)) {
    console.log(`Sensor type ${sensorType} already exists.`);
    return;
  }

  const channel = await connection!.createChannel();
  const queueName = `sensor_${sensorType}`;

  await channel.assertQueue(queueName, { durable: true });
  sensorChannels.set(sensorType, channel);

  console.log(`Added sensor type: ${sensorType} with queue: ${queueName}`);
}

export async function handleMessage(payload: Payload) {
  const { type, table, offset, data } = payload;
  const channel = sensorChannels.get(table)!;
  try {
    const queueName = `sensor_${table}`;
    const queueExchange = `sensor_${table}_exchange`;
    for (const item of data) {
      const { sensorType, ...rest } = item;

      //Ensures that the queue exists before using it.doesn’t exist, it is created
      await channel.assertQueue(queueName, { durable: true });

      await channel.bindQueue(queueName, queueExchange, 'sensor.temperature');

      channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
    }
  } catch (error) {
    console.error('Error processing message:', error);
  }
}

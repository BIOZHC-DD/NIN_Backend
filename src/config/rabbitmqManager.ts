import amqp from 'amqplib';
import { Payload } from '../types';
import { processBioSensorData } from '../models/BioSensor';

const RABBITMQ_URL = 'amqp://myuser:mypassword@localhost:5672/';
const EXCHANGE_TYPE = 'topic';
let connection: any;

// Initialize connection with retry logic
export async function initializeConnection() {
  const MAX_RETRIES = 5;
  let retries = MAX_RETRIES;

  while (retries > 0) {
    try {
      if (!connection) {
        connection = await amqp.connect(RABBITMQ_URL);
        console.log('Connected to RabbitMQ!');

        // Handle connection errors
        connection.on('error', (err: any) => {
          console.error('RabbitMQ connection error:', err.message);
          connection = null;
        });
      }
      return;
    } catch (error) {
      retries -= 1;
      console.log(`RabbitMQ connection failed, retries left: ${retries}`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
  throw new Error('Failed to connect to RabbitMQ after multiple attempts');
}

export async function addSensorType(
  sensorType: string,
  consumerCallback: (data: any) => void,
) {
  await initializeConnection();

  const channel = await connection.createChannel();
  const exchangeName = `sensor_${sensorType}_exchange`;
  const queueName = `sensor_${sensorType}_queue`;

  try {
    // Create exchange and queue with proper configuration
    await channel.assertExchange(exchangeName, EXCHANGE_TYPE, {
      durable: true,
    });
    await channel.assertQueue(queueName, { durable: true });

    // Bind queue to exchange with pattern
    await channel.bindQueue(
      queueName,
      exchangeName,
      `sensor.${sensorType.toLowerCase()}`,
    );

    console.log(`Configured sensor type ${sensorType} with:
      - Exchange: ${exchangeName}
      - Queue: ${queueName}
      - Routing pattern: sensor.${sensorType.toLowerCase()}`);

    // Setup consumer with proper error handling
    channel.consume(queueName, (msg: any) => {
      if (msg) {
        try {
          const content = JSON.parse(msg.content.toString());
          consumerCallback(content);
          channel.ack(msg);
        } catch (error) {
          console.error('Error processing message:', error);
          channel.nack(msg);
        }
      }
    });
  } catch (error) {
    console.error(`Error setting up ${sensorType}:`, error);
    throw error;
  }
}

export async function handleMessage(payload: Payload) {
  const { table, data } = payload;
  const exchangeName = `sensor_${table}_exchange`;

  try {
    const channel = await connection.createChannel();

    // Publish to exchange instead of sending directly to queue
    const routingKey = `sensor.${table.toLowerCase()}`;
    channel.publish(
      exchangeName,
      routingKey,
      Buffer.from(JSON.stringify(payload)),
      { persistent: true },
    );

    await channel.close();
  } catch (error) {
    console.error('Error publishing message:', error);
    throw error;
  }
}

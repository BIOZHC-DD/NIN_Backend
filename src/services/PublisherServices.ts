


//   try {
//     const connection = await amqp.connect('amqp://localhost');
//     const channel = await connection.createChannel();

//     const exchange = 'sensor_data_exchange';
    
//     // Assert the exchange to ensure it exists
//     await channel.assertExchange(exchange, 'direct', { durable: true });

//     // Dynamically determine the routing key based on sensorType
//     const routingKey = data.sensorType;  // 'bioSensor', 'temSensor', etc.

//     // Assert the queue for each sensorType
//     const queue = `${data.sensorType}_queue`;
//     await channel.assertQueue(queue, { durable: true });

//     // Send message to the exchange with the routing key (sensor type)
//     channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(data)), {
//       persistent: true
//     });

//     console.log(`Sent data to ${queue}:`, data);

//     // Close connection after message is sent
//     setTimeout(() => { connection.close(); }, 500);
//   } catch (error) {
//     console.error('Error sending message:', error);
//   }
// }

// Example usage
// const message = {
//   sensorType: 'bioSensor',
//   time: new Date(),
//   visit_id: 'visit123',
//   config: 'config1',
//   frequency: 25,
//   createdAt: new Date(),
//   data: [{ bioImpedance: 123, phaseAngle: 45, time: new Date() }]
// };

import amqp from 'amqplib';

// Function to connect to RabbitMQ
export async function connectRabbitMQ() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const exchange = 'sensor_data_exchange';

  // Assert the exchange (direct)
  await channel.assertExchange(exchange, 'direct', { durable: true });

  return { connection, channel, exchange };
}

// Function to send data to RabbitMQ
export async function sendToRabbitMQ(channel: any, exchange: string, routingKey: string, data: any) {
    const queue = `${routingKey}_queue`;
    console.log(`Sending data to queue: ${queue}`);

  try {
    // Assert the queue
      await channel.assertQueue(queue, { durable: true });
        await channel.bindQueue(queue, exchange, routingKey);

    // Publish the message to the exchange with the routing key
      const success = channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(data)), { persistent: true });
    

    if (success) {
      console.log(`Message sent to queue: ${queue}`);
    } else {
      console.error(`Failed to send message to queue: ${queue}`);
    }
  } catch (error:any) {
    console.error(`Error sending message to RabbitMQ: ${error.message}`);
  }
}

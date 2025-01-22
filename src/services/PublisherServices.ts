
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

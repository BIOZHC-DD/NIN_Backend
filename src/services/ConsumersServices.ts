import amqp from 'amqplib';

async function startConsumer(sensorType: string) {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const exchange = 'sensor_data_exchange';
    const queue = `${sensorType}_queue`;

    // Assert exchange and queue
    await channel.assertExchange(exchange, 'direct', { durable: true });
    console.log(`Exchange asserted: ${exchange}`);
    
    await channel.assertQueue(queue, { durable: true });
    console.log(`Queue asserted: ${queue}`);
    
    // Bind queue to exchange with routing key
    const routingKey = sensorType;
        await channel.bindQueue(queue, exchange, routingKey);
    console.log(`Queue ${queue} bound to exchange ${exchange} with routing key ${sensorType}`);

    // Consume messages
    channel.consume(queue, (msg) => {
      if (msg) {
        const message = JSON.parse(msg.content.toString());
          console.log(`nnnnnnnnnnnnnnnnnnnnnnnnnnnnReceived message for ${sensorType}:`, message);
          


          

      //  Acknowledge the message
        channel.ack(msg);
      } else {
        console.log('No message received');
      }
    });

    console.log(`Consumer is now listening on ${queue} for routing key ${sensorType}`);
  } catch (error: any) {
    console.error('Error starting consumer:', error.message);
  }
}

// Example usage: Start consumers for different sensor types
startConsumer('bioSensor');
startConsumer('temSensor');
startConsumer('gluSensor');

import { connectRabbitMQ, sendToRabbitMQ } from '../services/PublisherServices'; 
import { response, clientFormat } from '../types'; 

export async function handleMessage(message: string) {
  let connection, channel, exchange;
  try {
    const parsedMessage: response = JSON.parse(message);

    const { type, table, offset, data } = parsedMessage;

    if (!Array.isArray(data) || !table) {
      throw new Error('Invalid data structure or missing sensorType.');
    }

    // Connect to RabbitMQ
    ({ connection, channel, exchange } = await connectRabbitMQ());

    // Iterate over the data array to handle each sensor type
    for (const item of data) {
      const { sensorType, ...rest } = item;
      console.log(`Processing data for sensor type: ${sensorType}`);
     

      // Send the data to the appropriate RabbitMQ queue based on sensorType
      await sendToRabbitMQ(channel, exchange, sensorType, { ...rest, data: item.data });
    }
  } catch (error) {
    console.error('Error processing message:', error);
  } finally {
    // Ensure the connection and channel are closed after processing, but after all messages are sent
    try {
      if (channel) {
        await channel.close();
        console.log('Channel closed successfully');
      }
      if (connection) {
        await connection.close();
        console.log('Connection closed successfully');
      }
    } catch (err) {
      console.error('Error closing channel/connection:', err);
    }
  }
}

import { server } from './config/websocket'; // Import shared HTTP + WebSocket server
import { startAllConsumers } from './services/startallConsumerServices';

const port = 8082;

// Start RabbitMQ consumers
startAllConsumers()
  .then(() => console.log('All consumers started successfully'))
  .catch((err) => console.error('Error starting consumers:', err));

// ✅ Start the shared HTTP + WebSocket server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

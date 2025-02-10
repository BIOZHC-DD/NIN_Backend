import express from 'express';
import cors from 'cors';
import { server } from './config/websocket'; // Import WebSocket server
import { startAllConsumers } from './services/startallConsumerServices'; // Start consumers at startup

const app = express();
const port = 8081;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Start RabbitMQ consumers only once
startAllConsumers().then(() => {
  console.log('All consumers started successfully');
}).catch(err => {
  console.error('Error starting consumers:', err);
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;

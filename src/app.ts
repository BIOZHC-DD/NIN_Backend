import express from 'express';
import cors from 'cors';
import amqp from 'amqplib';
import cookieParser from 'cookie-parser';
import { createServer } from 'http';
import WebSocket from 'ws';
import authRoutes from './routes/authRoute';
import patientRoutes from './routes/patientRoute';
import syncRoutes from './routes/syncRoute';
import { logger } from './utils/loggerUtils';
import { processBioSensorData } from './models/BioSensor';
import {
  addSensorType,
  handleMessage,
  initializeConnection,
} from './config/rabbitmqManager';

import { Payload } from './types';
const app = express();
const port = 8082;

async function initializeSensors() {
  await initializeConnection();
  await addSensorType('BIO_SENSOR', (data) => {
    processBioSensorData(data);
  });
}
initializeSensors();

// Middleware
app.use(cookieParser());
app.use(express.json()); // Parse JSON bodies for all routes

// CORS Configuration
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow frontend domain
    credentials: true, // Allow credentials (cookies, auth headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  }),
);

// Logging Middleware
app.use((req, res, next) => {
  logger.info(`Request: ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/auth', authRoutes);
app.use('/patient', patientRoutes);
app.use('/api', syncRoutes);

// Create an HTTP server using the Express app
const server = createServer(app);

// Create a WebSocket server
const wsServer = new WebSocket.Server({ noServer: true });

wsServer.on('connection', (ws, request) => {
  console.log('Client connected');

  ws.on('message', (message: string) => {
    const response = JSON.parse(message) as Payload;
    handleMessage(response);
    ws.send(
      JSON.stringify({
        success: true,
        table: response.table,
        batchId: response.batchId,
      }),
    );
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// WebSocket upgrade handling
server.on('upgrade', (request, socket, head) => {
  if (request.url === '/ws') {
    wsServer.handleUpgrade(request, socket, head, (ws) => {
      wsServer.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

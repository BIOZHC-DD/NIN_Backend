import WebSocket from 'ws';
import { createServer } from 'http';
import app from '../app';  // Import Express app
import { handleMessage } from '../controllers/socketController';

// Create an HTTP server using the Express app
const server = createServer(app);

// Create a WebSocket server
const wsServer = new WebSocket.Server({ noServer: true });

wsServer.on('connection', (ws, request) => {
  console.log('Client connected');

  ws.on('message', (message: string) => {
    handleMessage(message);
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

export { wsServer, server };

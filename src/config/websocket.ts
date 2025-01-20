import WebSocket from 'ws';
import { createServer } from 'http';
import app from '../index';  // Express app
import { handleMessage } from '../controllers/socketController';

// Create an HTTP server using the Express app
const server = createServer(app);

// Create a WebSocket server, but don't listen to the HTTP request directly
const wsServer = new WebSocket.Server({ noServer: true });

// Handle WebSocket connection
wsServer.on('connection', (ws, request) => {
  console.log('Client connected');

  // Handle messages from the WebSocket client
  ws.on('message', (message:string) => {
    handleMessage(message);  
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.on('upgrade', (request, socket, head) => {
  console.log('Upgrade request received for URL:', request.url);
  if (request.url === '/ws') {
    wsServer.handleUpgrade(request, socket, head, (ws) => {
      wsServer.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});


// Export the server and WebSocket server for use elsewhere
export { wsServer, server };
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.wsServer = void 0;
const ws_1 = __importDefault(require("ws"));
const http_1 = require("http");
const index_1 = __importDefault(require("../index")); // Express app
const socketController_1 = require("../controllers/socketController");
// Create an HTTP server using the Express app
const server = (0, http_1.createServer)(index_1.default);
exports.server = server;
// Create a WebSocket server, but don't listen to the HTTP request directly
const wsServer = new ws_1.default.Server({ noServer: true });
exports.wsServer = wsServer;
// Handle WebSocket connection
wsServer.on('connection', (ws, request) => {
    console.log('Client connected');
    // Handle messages from the WebSocket client
    ws.on('message', (message) => {
        (0, socketController_1.handleMessage)(message);
    });
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
// Handle HTTP upgrade requests for WebSocket connections
server.on('upgrade', (request, socket, head) => {
    // If WebSocket upgrade request, pass it to the WebSocket server
    if (request.url === '/ws') {
        wsServer.handleUpgrade(request, socket, head, (ws) => {
            wsServer.emit('connection', ws, request);
        });
    }
    else {
        socket.destroy(); // Reject non-WebSocket requests
    }
});

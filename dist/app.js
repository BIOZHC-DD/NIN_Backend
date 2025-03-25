"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const http_1 = require("http");
const ws_1 = __importDefault(require("ws"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const patientRoute_1 = __importDefault(require("./routes/patientRoute"));
const syncRoute_1 = __importDefault(require("./routes/syncRoute"));
const loggerUtils_1 = require("./utils/loggerUtils");
const BioSensor_1 = require("./models/BioSensor");
const rabbitmqManager_1 = require("./config/rabbitmqManager");
const app = (0, express_1.default)();
const port = 8082;
function initializeSensors() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, rabbitmqManager_1.initializeConnection)();
        yield (0, rabbitmqManager_1.addSensorType)('BIO_SENSOR', (data) => {
            (0, BioSensor_1.processBioSensorData)(data);
        });
    });
}
initializeSensors();
// Middleware
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json()); // Parse JSON bodies for all routes
// CORS Configuration
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000', // Allow frontend domain
    credentials: true, // Allow credentials (cookies, auth headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
}));
// Logging Middleware
app.use((req, res, next) => {
    loggerUtils_1.logger.info(`Request: ${req.method} ${req.url}`);
    next();
});
// Routes
app.use('/auth', authRoute_1.default);
app.use('/patient', patientRoute_1.default);
app.use('/api', syncRoute_1.default);
// Create an HTTP server using the Express app
const server = (0, http_1.createServer)(app);
// Create a WebSocket server
const wsServer = new ws_1.default.Server({ noServer: true });
wsServer.on('connection', (ws, request) => {
    console.log('Client connected');
    ws.on('message', (message) => {
        const response = JSON.parse(message);
        const { data } = response;
        const Ids = data.map((item) => {
            return item.id;
        });
        (0, rabbitmqManager_1.handleMessage)(response);
        ws.send(JSON.stringify({
            success: true,
            table: response.table,
            ids: Ids,
        }));
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
    }
    else {
        socket.destroy();
    }
});
// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

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
exports.initializeConnection = initializeConnection;
exports.addSensorType = addSensorType;
exports.handleMessage = handleMessage;
const amqplib_1 = __importDefault(require("amqplib"));
const RABBITMQ_URL = 'amqp://myuser:mypassword@localhost:5672/';
const EXCHANGE_TYPE = 'topic';
let connection;
// Initialize connection with retry logic
function initializeConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        const MAX_RETRIES = 5;
        let retries = MAX_RETRIES;
        while (retries > 0) {
            try {
                if (!connection) {
                    connection = yield amqplib_1.default.connect(RABBITMQ_URL);
                    console.log('Connected to RabbitMQ!');
                    // Handle connection errors
                    connection.on('error', (err) => {
                        console.error('RabbitMQ connection error:', err.message);
                        connection = null;
                    });
                }
                return;
            }
            catch (error) {
                retries -= 1;
                console.log(`RabbitMQ connection failed, retries left: ${retries}`);
                yield new Promise((res) => setTimeout(res, 5000));
            }
        }
        throw new Error('Failed to connect to RabbitMQ after multiple attempts');
    });
}
function addSensorType(sensorType, consumerCallback) {
    return __awaiter(this, void 0, void 0, function* () {
        yield initializeConnection();
        const channel = yield connection.createChannel();
        const exchangeName = `sensor_${sensorType}_exchange`;
        const queueName = `sensor_${sensorType}_queue`;
        try {
            // Create exchange and queue with proper configuration
            yield channel.assertExchange(exchangeName, EXCHANGE_TYPE, {
                durable: true,
            });
            yield channel.assertQueue(queueName, { durable: true });
            // Bind queue to exchange with pattern
            yield channel.bindQueue(queueName, exchangeName, `sensor.${sensorType.toLowerCase()}`);
            console.log(`Configured sensor type ${sensorType} with:
      - Exchange: ${exchangeName}
      - Queue: ${queueName}
      - Routing pattern: sensor.${sensorType.toLowerCase()}`);
            // Setup consumer with proper error handling
            channel.consume(queueName, (msg) => {
                if (msg) {
                    try {
                        const content = JSON.parse(msg.content.toString());
                        consumerCallback(content);
                        channel.ack(msg);
                    }
                    catch (error) {
                        console.error('Error processing message:', error);
                        channel.nack(msg);
                    }
                }
            });
        }
        catch (error) {
            console.error(`Error setting up ${sensorType}:`, error);
            throw error;
        }
    });
}
function handleMessage(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { table, data } = payload;
        const exchangeName = `sensor_${table}_exchange`;
        try {
            const channel = yield connection.createChannel();
            // Publish to exchange instead of sending directly to queue
            const routingKey = `sensor.${table.toLowerCase()}`;
            channel.publish(exchangeName, routingKey, Buffer.from(JSON.stringify(payload)), { persistent: true });
            yield channel.close();
        }
        catch (error) {
            console.error('Error publishing message:', error);
            throw error;
        }
    });
}

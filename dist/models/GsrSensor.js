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
exports.processGsrData = processGsrData;
const client_1 = __importDefault(require("../config/client"));
function processGsrData(message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!message ||
                !message.visit_id ||
                !message.data ||
                !Array.isArray(message.data)) {
                console.error('Invalid message format:', message);
                return;
            }
            // Prepare data for batch insert
            const GsrRecords = message.data.map((sensor) => ({
                vid: message.visit_id,
                config: message.config || 'default',
                frequency: message.frequency || 0,
                gsr: sensor.gsr,
                time: new Date(sensor.time),
            }));
            // Insert data into Prisma database
            yield client_1.default.gsrData.createMany({
                data: GsrRecords,
                skipDuplicates: true,
            });
            console.log(`Successfully processed ${GsrRecords.length} bioSensor records for visit_id: ${message.visit_id}`);
        }
        catch (error) {
            console.error('Error processing bioSensor data:', error.message);
        }
    });
}

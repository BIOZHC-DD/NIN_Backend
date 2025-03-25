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
exports.processBioSensorData = processBioSensorData;
const client_1 = __importDefault(require("../config/client"));
function processBioSensorData(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = payload;
        try {
            // Prepare data for batch insert
            const bioSensorRecords = data.map((sensor) => ({
                vid: sensor.visit_id,
                config: sensor.config || 'default',
                frequency: sensor.frequency || 0,
                bioImpedance: sensor.bioImpedance,
                phaseAngle: sensor.phaseAngle,
                time: new Date(sensor.created_at),
            }));
            // Insert data into Prisma database
            yield client_1.default.biosensorData.createMany({
                data: bioSensorRecords,
                skipDuplicates: false,
            });
        }
        catch (error) {
            console.error('Error processing bioSensor data:', error.message);
        }
    });
}

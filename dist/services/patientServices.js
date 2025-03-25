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
exports.getPatientById = exports.getAllPatients = void 0;
const client_1 = __importDefault(require("../config/client"));
const getAllPatients = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.default.patient.findMany();
});
exports.getAllPatients = getAllPatients;
const getPatientById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('🔍 Received ID:', id);
        const patient = yield client_1.default.patient.findUnique({
            where: { id: id },
        });
        console.log('📌 Prisma Query Result:', patient);
        return patient;
    }
    catch (error) {
        console.error('❌ Error fetching patient by ID:', error);
        throw new Error('Failed to fetch patient');
    }
});
exports.getPatientById = getPatientById;

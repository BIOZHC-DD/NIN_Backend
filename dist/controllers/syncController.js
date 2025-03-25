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
exports.pullChanges = exports.pushChanges = void 0;
const client_1 = __importDefault(require("../config/client"));
const syncServices_1 = require("../services/syncServices");
const syncService = new syncServices_1.watermelonSync(client_1.default, [
    { name: 'patients', model: client_1.default.patient, prismaName: 'patient' },
    { name: 'clinicals', model: client_1.default.clinic, prismaName: 'clinic' },
    { name: 'visits', model: client_1.default.visit, prismaName: 'visit' },
    { name: 'intervals', model: client_1.default.interval, prismaName: 'interval' },
]);
const pushChanges = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Raw query:', req.query);
    console.log('query', req.query.last_pulled_at);
    const lastPulledAt = req.query.last_pulled_at
        ? Number(req.query.last_pulled_at)
        : 0;
    const isLoginSync = req.query.isLoginSync === 'true';
    console.log('last_pulled_at', lastPulledAt);
    console.log('isLoginSync', isLoginSync);
    try {
        const result = yield syncService.pullChanges(lastPulledAt);
        const timestamp = Math.floor(Date.now() / 1000);
        const response = {
            timestamp,
            changes: result,
        };
        console.log(response);
        res.json(response);
    }
    catch (error) {
        console.error('Sync failed', error);
        res.status(500).json({ error: 'Sync failed' });
    }
});
exports.pushChanges = pushChanges;
const pullChanges = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const changes = req.body;
    try {
        yield syncService.syncPush(changes.changes);
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: 'Sync failed' });
    }
});
exports.pullChanges = pullChanges;

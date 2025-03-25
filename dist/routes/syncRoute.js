"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const syncController_1 = require("../controllers/syncController");
const router = express_1.default.Router();
router.get('/push', syncController_1.pushChanges);
router.post('/pull', syncController_1.pullChanges);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientController_1 = require("../controllers/patientController");
const patientController_2 = require("../controllers/patientController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.get('/patients', authMiddleware_1.authMiddleware, patientController_1.getAllPatients);
router.get('/patient/:id', authMiddleware_1.authMiddleware, patientController_2.getpatientbyid);
exports.default = router;

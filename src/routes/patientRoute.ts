import express from 'express';
import { getAllPatients } from '../controllers/patientController';
import { getpatientbyid } from '../controllers/patientController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/patients', authMiddleware, getAllPatients); 
router.get('/patient/:id',authMiddleware, getpatientbyid);

export default router;

import express from 'express';
import { getAllPatients } from '../controllers/patientController';
import { getpatientbyid } from '../controllers/patientController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/profiles', authMiddleware, getAllPatients); 
router.get('/profile/:id',authMiddleware, getpatientbyid);

export default router;

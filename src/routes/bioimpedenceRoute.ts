import express from 'express';

const router = express.Router();

import { getBioimpedenceByvid } from '../controllers/bioimpedenceController';

import { authMiddleware } from '../middlewares/authMiddleware';




router.get('/bioimpedence/:id', authMiddleware, getBioimpedenceByvid);


export default router;
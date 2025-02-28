import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

// Register route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

export default router;
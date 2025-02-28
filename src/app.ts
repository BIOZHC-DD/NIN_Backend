import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoute';
import { logger } from '../src/utils/loggerUtils';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
  logger.info(`Request: ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/auth', authRoutes);

export default app; // ✅ Export app without starting it

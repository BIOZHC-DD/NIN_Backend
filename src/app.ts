import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoute';
import patientRoutes from './routes/patientRoute';
import { logger } from '../src/utils/loggerUtils';
import cookieParser from 'cookie-parser';
import syncRoutes from './routes/syncRoute';

const app = express();
app.use(cookieParser());

// Middleware
app.use(express.json()); // Parse JSON bodies for all routes

// CORS Configuration
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow frontend domain
    credentials: true, // Allow credentials (cookies, auth headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  })
);

// Logging Middleware
app.use((req, res, next) => {
  logger.info(`Request: ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/auth', authRoutes);
app.use('/', patientRoutes);
app.use('/api', syncRoutes);
export default app;
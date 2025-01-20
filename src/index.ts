import express, { Request, Response } from 'express';
import cors from 'cors';
import { server } from './config/websocket';

const app = express();
const port = 8081;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;

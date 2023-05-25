require('dotenv').config();
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app: Application = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// router
app.get('/api', (req: Request, res: Response) => {
  res.json('hello world');
})

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
})
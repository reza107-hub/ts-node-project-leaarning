import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRouter } from './app/modules/student/student.routes';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.use('/api/v1/students', StudentRouter);

console.log(process.cwd());

export default app;

import * as express from 'express';
import {Request, Response} from 'express';
import * as bodyParser from 'body-parser';

import { taskService } from './services/taskService';

const app = express();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello!!');
});

app.get('/tasks', (req: Request, res: Response) => {
  const tasks = taskService.getTasks();
  res.send(tasks);
});

app.post('/tasks', (req: Request, res: Response) => {
  const { title } = req.body;
  taskService.addTask(title);
  res.status(201).send();
});

export default app;

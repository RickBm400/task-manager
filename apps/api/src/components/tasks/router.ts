import { Hono } from 'hono';
import { getTaskService } from './services.js';

const tasks = new Hono().basePath('/tasks');

tasks.get('/', async (e) => {
  const tasks = await getTaskService();
  return e.json(tasks);
});

export default tasks;

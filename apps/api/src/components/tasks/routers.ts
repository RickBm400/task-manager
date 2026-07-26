import { Hono } from 'hono';

const tasks = new Hono().basePath('/tasks');

tasks.get('/', (e) => e.text('Hello from tasks'));

export default tasks;

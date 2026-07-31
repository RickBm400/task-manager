import { serve } from '@hono/node-server';
import { swaggerUI } from '@hono/swagger-ui';
import { Hono } from 'hono';
import NeDBClass from './infrastructure/db/nedb/index.js';
import TraceLog from './shared/utils/TraceLogs.js';

const app = new Hono();

const openApiDoc = {
  openapi: '3.0.0', // This is the required version field
  info: {
    title: 'Task Manager API ',
    version: '1.0.0',
    description: 'API documentation for task management',
  },
  paths: {},
};

app.get('/doc', (c) => c.json(openApiDoc));

app.get('/ui', swaggerUI({ url: '/doc' }));

app.get('/health', (c) => c.text('OK'));

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  async (info) => {
    const db = await new NeDBClass().initializeCluster();
    console.log(await db.model('users').findAsync({}));
    console.log(await db.model('users').findAsync({}));
    const users = db.model('users');

    await users.findAsync({});
    TraceLog.create(`Server is running on localhost:${info.port}`, {
      target: process.env.NODE_ENV,
    });

    TraceLog.create('Log texto');
  },
);

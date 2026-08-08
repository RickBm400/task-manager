import { serve } from '@hono/node-server';
import { swaggerUI } from '@hono/swagger-ui';
import { Hono } from 'hono';
import TraceLog from './src/shared/utils/TraceLogs.js';
import $_db from './src/infrastructure/db/nedb/index.js';
import { CTasks, TaskModel } from './src/components/tasks/model.js';
import tasks from '@/components/tasks/router.js';

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

app.route('/', tasks);

app.get('/doc', (c) => c.json(openApiDoc));

app.get('/ui', swaggerUI({ url: '/doc' }));

app.get('/health', (c) => c.text('OK'));

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  async (info) => {
    await $_db.initCluster();
    TraceLog.create(`Server is running on localhost:${info.port}`, {
      target: process.env.NODE_ENV,
    });

    TraceLog.create('Log texto');
  },
);

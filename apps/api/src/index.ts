import { serve } from '@hono/node-server';
import { swaggerUI } from '@hono/swagger-ui';
import { Hono } from 'hono';
import tasks from './routes/task.router.js';

const app = new Hono();

const openApiDoc = {
  openapi: '3.0.0', // This is the required version field
  info: {
    title: 'Task Manager API ',
    version: '1.0.0',
    description: 'API documentation for task management',
  },
  paths: {
    // Add your API paths here
    '/health': {
      get: {
        description: 'Basic endpoint for health check',
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    // Add more endpoints as needed
  },
};

app.get('/doc', (c) => c.json(openApiDoc));

// Use the middleware to serve Swagger UI at /ui
app.get('/ui', swaggerUI({ url: '/doc' }));

app.get('/health', (c) => c.text('OK'));

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.get('/greetins', (c) => {
  c.status(201);
  console.debug(c);
  return c.json({ message: 'holamundo' });
});

app.route('/', tasks);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);

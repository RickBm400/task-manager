import type { Context } from 'hono';
import TraceLog from './TraceLogs.js';

export default function logsMiddleware() {
  return async (c: Context, next: any) => {
    TraceLog.create(`${c.req.method} ${c.req.path}`, {
      target: 'API',
      level: 'DEBUG',
    });
    await next();
  };
}

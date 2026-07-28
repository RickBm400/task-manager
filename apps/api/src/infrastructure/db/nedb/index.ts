import { createRequire } from 'node:module';
import path from 'node:path';

// node function for create a compatible require import
const require = createRequire(import.meta.url);

// wrapper from CommonJS to ECMAScript
const Datastore =
  require('@seald-io/nedb') as typeof import('@seald-io/nedb').default;

// base user example
type User = { name: string; age: number };

// db initialization
const db = new Datastore<User>({
  filename: path.join(process.cwd(), 'store', 'users.db'),
});

// load db and set new data
await db.loadDatabaseAsync();
await db.insertAsync({ name: 'bob', age: 19 });

// debug
console.log(await db.findAsync({ name: 'bob' }));

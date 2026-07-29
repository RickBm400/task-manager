import { createRequire } from 'node:module';
import type Nedb from '@seald-io/nedb';
import path from 'node:path';
import TraceLog from '../../../shared/utils/TraceLogs.js';

// node function for create a compatible require import
const require = createRequire(import.meta.url);

// wrapper from CommonJS to ECMAScript
const Datastore =
  require('@seald-io/nedb') as typeof import('@seald-io/nedb').default;

// NeDB local class
export default class NeDBClass {
  users!: Nedb.default;
  tasks!: Nedb.default;

  constructor() {
    const collections = ['users', 'tasks'] as const;

    for (const collection of collections) {
      this[collection] = new Datastore(this.$_setDSTConfig(collection));
    }

    TraceLog.create({
      target: 'NeDB',
      context: 'Dabatabe initialized',
    });
  }

  private $_setDSTConfig(fileName: string): Nedb.default.DataStoreOptions {
    return {
      filename: path.join(process.cwd(), 'db_store', `${fileName}.db`),
    };
  }

  async initializeCluster(): Promise<NeDBClass> {
    const dbs: Nedb.default[] = Object.values(this);
    await Promise.all(dbs.map((db) => db.loadDatabaseAsync()));
    return this;
  }
}

// const cluster = new NeDBClass();

// await cluster.initializeCluster();
// await cluster.tasks.insertAsync({ name: 'juan', type: 'doctor' });
// console.log(await cluster.tasks.findAsync({ name: 'juan' }));

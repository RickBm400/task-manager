import { createRequire } from 'node:module';
import type Nedb from '@seald-io/nedb';
import path from 'node:path';
import TraceLog from '../../../shared/utils/TraceLogs.js';

// node function for create a compatible require import
const require = createRequire(import.meta.url);

// wrapper from CommonJS to ECMAScript
const Datastore =
  require('@seald-io/nedb') as typeof import('@seald-io/nedb').default;

const collections = ['users', 'tasks'] as const;

// NeDB local class
export default class NeDBClass {
  private _localCollections: Record<string, Nedb.default> = {};

  constructor() {
    for (const collection of collections) {
      this._localCollections[collection] = new Datastore(
        this.$_setDSTConfig(collection),
      );
    }

    TraceLog.create('Dabatabe initialized', {
      target: 'NeDB',
    });
  }

  private $_setDSTConfig(fileName: string): Nedb.default.DataStoreOptions {
    return {
      filename: path.join(process.cwd(), 'db_store', `${fileName}.db`),
    };
  }

  async initializeCluster(): Promise<NeDBClass> {
    const dbs: Nedb.default[] = Object.values(this._localCollections);
    await Promise.all(dbs.map((db) => db.loadDatabaseAsync()));
    return this;
  }

  model(collection: (typeof collections)[number]) {
    if (!collection) throw new Error('Fail to load collection');
    if (!Object.hasOwn(this._localCollections, collection))
      throw new Error('Can not find resource');

    return this._localCollections[collection] as Nedb.default;
  }
}

// const cluster = new NeDBClass();

// await cluster.initializeCluster();
// await cluster.tasks.insertAsync({ name: 'juan', type: 'doctor' });
// console.log(await cluster.tasks.findAsync({ name: 'juan' }));

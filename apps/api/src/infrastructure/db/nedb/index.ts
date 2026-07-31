import { createRequire } from 'node:module';
import path from 'node:path';
import TraceLog from '../../../shared/utils/TraceLogs.js';
import Model from './model.class.js';
import type { IDatabase } from '../../../types/infrastructure/database.types.js';

// node function for create a compatible require import
const require = createRequire(import.meta.url);

// wrapper from CommonJS to ECMAScript
const Datastore =
  require('@seald-io/nedb') as typeof import('@seald-io/nedb').default;

// NeDB local class
export class NeDBClass implements IDatabase {
  private _localCollections: Record<string, Model<any>> = {};

  constructor() {
    TraceLog.create('Dabatabe created', {
      target: 'NeDB',
    });
  }

  private $_setDataStorageConfig(fileName: string) {
    return {
      filename: path.join(process.cwd(), 'db_store', `${fileName}.db`),
    };
  }

  async initCluster(): Promise<NeDBClass> {
    const dbs: Model<any>[] = Object.values(this._localCollections);
    await Promise.all(dbs.map((db) => db.load()));
    return this;
  }

  model<T extends object>(name: string): Model<T> {
    if (!this._localCollections[name]) {
      const datastore = new Datastore<T>(this.$_setDataStorageConfig(name));

      this._localCollections[name] = new Model(datastore);
    }

    return this._localCollections[name] as Model<T>;
  }
}

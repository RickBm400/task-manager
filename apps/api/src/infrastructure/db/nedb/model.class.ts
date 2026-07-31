import type Nedb from '@seald-io/nedb';
import type {
  IModel,
  IModelUpdateOptions,
} from '../../../types/infrastructure/database.types.js';

export default class Model<T extends object> implements IModel<T> {
  constructor(private readonly datastore: Nedb.default<T>) {}

  async load() {
    await this.datastore.loadDatabaseAsync();
  }

  async insert(doc: T) {
    return this.datastore.insertAsync({
      ...doc,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  async find(query: Partial<T> = {}) {
    return this.datastore.findAsync(query);
  }

  async findOne(query: Partial<T>) {
    return this.datastore.findOneAsync(query);
  }

  async update(
    query: Partial<T>,
    update: Partial<T>,
    options?: IModelUpdateOptions,
  ) {
    return (await this.datastore.updateAsync(query, update, options))
      .numAffected;
  }

  async delete(query: Partial<T>) {
    return this.datastore.removeAsync(query, {});
  }

  get raw() {
    return this.datastore;
  }
}

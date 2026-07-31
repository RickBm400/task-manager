export interface IModelUpdateOptions {
  upsert?: boolean;
  multi?: boolean;
}

export interface IModel<T extends object> {
  load(): Promise<void>;

  insert(doc: T): Promise<T>;

  find(query?: Partial<T>): Promise<T[]>;

  findOne(query: Partial<T>): Promise<T | null>;

  update(
    query: Partial<T>,
    update: Partial<T>,
    options?: IModelUpdateOptions,
  ): Promise<number>;

  delete(query: Partial<T>): Promise<number>;
}

export interface IDatabase {
  initCluster(): Promise<IDatabase>;

  model<T extends object>(name: string): IModel<T>;
}

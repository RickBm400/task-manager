export interface ICrudRepository<T> {
  findById(id: string): Promise<T | null>;

  findAll(): Promise<T[]>;

  create(entity: T): Promise<T>;

  update(id: string, entity: Partial<T>): Promise<void>;

  delete(id: string): Promise<void>;
}

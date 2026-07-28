import type { ICrudRepository } from '../../shared/repository/baseRepository.interface.js';
import type { TaskModel } from './model.js';

export class TaskRepository implements ICrudRepository<TaskModel> {
  findById(id: string): Promise<TaskModel | null> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<TaskModel[]> {
    throw new Error('Method not implemented.');
  }
  create(entity: TaskModel): Promise<TaskModel> {
    throw new Error('Method not implemented.');
  }
  update(id: string, entity: Partial<TaskModel>): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

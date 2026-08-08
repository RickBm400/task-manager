import type { ICrudRepository } from '@/shared/repository/baseRepository.interface.js';
import { TaskModel, type ITask } from './model.js';
import type Model from '@/infrastructure/db/nedb/model.class.js';

export class TaskRepository implements ICrudRepository<ITask> {
  constructor(private readonly taskModel: Model<ITask> = TaskModel) {}

  findById(id: string): Promise<ITask | null> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<ITask[]> {
    const tasks = await this.taskModel.find({ title: 'meteora' });
    return tasks;
  }
  create(entity: ITask): Promise<ITask> {
    throw new Error('Method not implemented.');
  }
  update(id: string, entity: Partial<ITask>): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

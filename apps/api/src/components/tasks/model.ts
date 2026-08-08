import type { Priority } from '@repo/task-manager-types';
import $_db from '@/infrastructure/db/nedb/index.js';

export interface ITask {
  _id?: string;
  title: string;
  priority: Priority;
  description: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export class CTasks implements ITask {
  public _id: string;
  public title: string;
  public priority: Priority;
  public description: string;
  public createdAt: Date | string;
  public updatedAt: string | Date;

  constructor(params: ITask) {
    this._id = params._id!;
    this.title = params.title;
    this.priority = params.priority;
    this.description = params.description;
    this.createdAt = params?.createdAt || new Date();
    this.updatedAt = params.updatedAt || new Date();
  }

  get id(): string | undefined {
    return this._id;
  }

  static create(params: ITask) {
    return new CTasks(params);
  }

  toJSON() {
    return {
      _id: this._id,
      title: this.title,
      priority: this.priority,
      description: this.description,
      createdAt:
        this.createdAt instanceof Date
          ? this.createdAt.toISOString()
          : new Date(this.createdAt).toISOString(),
      updatedAt:
        this.createdAt instanceof Date
          ? this.createdAt.toISOString()
          : new Date(this.createdAt).toISOString(),
    };
  }
}

export const TaskModel = $_db.model<ITask>('tasks');

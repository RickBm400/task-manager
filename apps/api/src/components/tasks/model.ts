import type { Priority } from '@repo/task-manager-types';

export interface ITask {
  id?: string;
  title: string;
  priority: Priority | string;
  description: string;
  createdAt: Date | string;
}

export class TaskClass implements ITask {
  constructor(
    private _id: string,
    public title: string,
    public priority: string,
    public description: string,
    public createdAt: Date | string,
  ) {}

  get id(): string | undefined {
    return this._id;
  }

  toJSON() {
    return {
      id: this._id,
      title: this.title,
      priority: this.priority,
      description: this.description,
      createdAt:
        this.createdAt instanceof Date
          ? this.createdAt.toISOString()
          : new Date(this.createdAt).toISOString(),
    };
  }
}

import { TaskRepository } from './repository.js';

const taskRepository = new TaskRepository();

export async function getTaskService() {
  return await taskRepository.findAll();
}

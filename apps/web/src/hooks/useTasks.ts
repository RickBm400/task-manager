import type { Task } from "@repo/task-manager-types";
import { useEffect, useState } from "react";
import { TaskExamples } from "../constants/tasks_examples";

function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks([...TaskExamples]);
  }, []);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return {
    taskList: tasks,
    addTask,
  };
}

export default useTasks;

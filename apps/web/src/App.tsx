import type { Task } from "@repo/task-manager-types";
import Button from "./components/Button";
import TaskCard from "./components/TaskCard";
import { TaskExamples } from "./constants/tasks";
import { useEffect, useState } from "react";
import SideDrawer from "./components/SideDrawer";

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks([...TaskExamples]);
  }, []);

  return (
    <div className="App w-screen h-screen grid place-items-center">
      <div className=" bg-white w-6xl p-8 rounded-lg shadow-lg space-y-2">
        <h2 className="text-lg font-bold">Incidencias y tareas</h2>

        <div className="flex justify-between items-center">
          <Button>+ Nueva Tarea</Button>
        </div>

        <section id="task-list" className="w-full mt-8 space-y-4">
          {tasks.map((task: Task) => (
            <TaskCard task={task} />
          ))}
        </section>
      </div>
      <SideDrawer>
        <div>ola</div>
      </SideDrawer>
    </div>
  );
}

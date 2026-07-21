import type { Task } from "@repo/task-manager-types";
import { Button } from "./components/ui";
import TaskCard from "./components/TaskCard";
import { useState, type ReactNode } from "react";
import SideDrawer from "./components/SideDrawer";
import DynamicForm from "./components/DynamicForm";
import useTasks from "./hooks/useTasks";

export function App() {
  const [openTaskForm, setOpenTaskForm] = useState<boolean>(false);
  const { taskList } = useTasks();

  const SideDrawerActions = (): ReactNode => {
    return (
      <div className="space-x-4">
        <Button>Cancel</Button>
        <Button type="primary" onClick={() => setOpenTaskForm(false)}>
          Submit
        </Button>
      </div>
    );
  };

  return (
    <div className="App w-screen h-screen grid place-items-center">
      <div className=" bg-white w-6xl p-8 rounded-lg shadow-lg space-y-2">
        <h2 className="text-lg font-semibold">Incidencias y tareas</h2>

        <div className="flex justify-between items-center">
          <Button type="primary" onClick={() => setOpenTaskForm(true)}>
            + Nueva Tarea
          </Button>
        </div>

        <section id="task-list" className="w-full mt-8 space-y-4">
          {taskList.map((task: Task) => (
            <TaskCard task={task} />
          ))}
        </section>
      </div>
      <SideDrawer
        title="Add new task"
        open={openTaskForm}
        extra={SideDrawerActions()}
        onClose={() => setOpenTaskForm(false)}
      >
        <DynamicForm />
      </SideDrawer>
    </div>
  );
}

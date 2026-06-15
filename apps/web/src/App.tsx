import Button from "./components/Button"
import TaskCard from "./components/TaskCard.component";

export function App() {
  return <div className="App w-screen h-screen grid place-items-center">
      <div className=" bg-white w-6xl p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">Incidencias y tareas</h2>
            <Button>
                   + Nueva Tarea
            </Button>
        </div>
        <section id="task-list" className="w-full mt-8 space-y-4">
            <TaskCard />
            <TaskCard />
            <TaskCard />
        </section>
      </div>

  </div>;
}

import Button from "./components/Button"

export function App() {
  return <div className="App w-screen h-screen grid place-items-center">
      <div className="flex justify-between bg-white w-6xl p-8 rounded-lg shadow-lg">
          <h2 className="text-lg">Incidencias y tareas</h2>
            <Button>
                   + Nueva Tarea
            </Button>
      </div>    
  </div>;
}

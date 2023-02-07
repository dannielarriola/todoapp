import { useState } from "react";
import { ITask } from "../../interfaces/ITask";

function Todo() {
  let [store, setStore] = useState<ITask[]>([]);

  function addTask(): void {
    setStore([...store, { title: "Tarea 1", description: "Descripción 1" }]);
  }
  return (
    <div>
      <button onClick={addTask}>Agregar tarea</button>
    </div>
  );
}

export default Todo;

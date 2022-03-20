import React, { MouseEvent } from "react";

function Todo() {
  function addTask(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    console.log("tarea agregada");
  }
  return (
    <div>
      <a href="#" onClick={addTask}>Agregar tarea</a>
    </div>
  )
}

export default Todo;

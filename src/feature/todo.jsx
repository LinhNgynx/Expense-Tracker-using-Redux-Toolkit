import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo, toggleToDo } from "./todoSlice";
export default function Todo() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    task: "",
    description: "",
  });
  const handleChange = (e, prop) => {
    setInput((prev) => ({ ...prev, [prop]: e.target.value }));
  };
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(
      addToDo({
        task: input.task,
        description: input.description,
      })
    );
    setInput({
      task: "",
      description: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Task"
          value={input.task}
          onChange={(e) => handleChange(e, "task")}
          required
        ></input>
        <input
          type="text"
          placeholder="Description"
          value={input.description}
          onChange={(e) => handleChange(e, "description")}
          required
        ></input>
        <input type="submit" value="submit"></input>
      </form>
      <div>
        {todo.length !== 0 &&
          todo.map((todo, i) => (
            <div key={todo.id} style={{ display: "flex", gap: "10px" }}>
              <input
                type="checkbox"
                onChange={() => dispatch(toggleToDo(todo.id))}
              ></input>
              <div style={{textDecoration: todo.isCompleted? "line-through" : "none"}}>
              <p>{todo.task}</p>
              <p>{todo.description}</p>
              </div>
              <button onClick={() => dispatch(deleteToDo(todo.id))}>
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

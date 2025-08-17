import { useState } from "react";
import { useTasksDispatch } from "../hooks/useTasksDispatch";
import toast from "react-hot-toast";

export function AddTask() {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useTasksDispatch();
  function handleAddTodo() {
    const trimmedNewToDo = newToDo.trim();
    setNewToDo("");

    if (!trimmedNewToDo) {
      toast.error("Cannot add empty item.");
      return;
    }

    dispatch({
      type: "added",
      content: trimmedNewToDo,
      id: crypto.randomUUID(),
      updatedAt: Date.now(),
    });
  }

  function handleKeys(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case "Escape": {
        setNewToDo("");
        return;
      }
      case "Enter": {
        handleAddTodo();
        return;
      }
      default: {
        return;
      }
    }
  }

  return (
    <div className="add-task-container">
      <input
        placeholder="Add Task"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
        onKeyDown={handleKeys}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

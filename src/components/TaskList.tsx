import { useState, useRef, useEffect, useCallback } from "react";
import type { Task } from "../types/task";
import { useTasks } from "../hooks/useTasks";
import { useTasksDispatch } from "../hooks/useTasksDispatch";
import { isClickInsideNodeRef } from "../utils/DOM";

export function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="tasks-container">
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </ul>
  );
}

type TaskProps = {
  task: Task;
};
function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(task.content);
  const dispatch = useTasksDispatch();
  const editableFieldRef = useRef<HTMLInputElement | null>(null);
  const editButtonRef = useRef<HTMLButtonElement | null>(null);

  const cancelEdit = useCallback(() => {
    setNewContent(task.content);
    setIsEditing(false);
  }, [task.content]);

  useEffect(() => {
    if (isEditing) {
      editableFieldRef.current?.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const isClickOutsideField =
        !isClickInsideNodeRef(editButtonRef, e) &&
        !isClickInsideNodeRef(editableFieldRef, e);
      if (isClickOutsideField) {
        cancelEdit();
      }
    }

    if (isEditing) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isEditing, cancelEdit]);

  const checkboxId = `${task.id}-checkbox`;

  function handleEdit() {
    setIsEditing(true);
  }
  function handleSave() {
    setIsEditing(false);
    const trimmedContent = newContent.trim();
    if (!trimmedContent) {
      setNewContent(task.content);
      return;
    }
    setNewContent(trimmedContent);
    if (trimmedContent === task.content) return;
    dispatch({
      type: "contentChanged",
      id: task.id,
      content: trimmedContent,
      updatedAt: Date.now(),
    });
  }
  function handleToggleEdit() {
    if (isEditing) {
      handleSave();
    } else {
      handleEdit();
    }
  }
  function handleToggleTask() {
    dispatch({
      type: "toggled",
      id: task.id,
    });
  }
  function handleKeys(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case "Escape": {
        cancelEdit();
        return;
      }
      case "Enter": {
        handleToggleEdit();
        return;
      }
      default: {
        return;
      }
    }
  }

  return (
    <li className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleTask}
        id={checkboxId}
      />
      <label htmlFor={isEditing ? undefined : checkboxId}>
        <input
          className={`task-content${task.completed ? " completed" : ""} ${!isEditing ? "readonly" : ""}`}
          value={isEditing ? newContent : task.content}
          onChange={(e) => setNewContent(e.target.value)}
          readOnly={!isEditing}
          onKeyDown={handleKeys}
          onClick={isEditing ? undefined : handleToggleTask}
          ref={editableFieldRef}
          tabIndex={isEditing ? 0 : -1}
        />
      </label>
      <time className="timestamp">
        {new Date(task.updatedAt).toLocaleString()}
      </time>
      <button onClick={handleToggleEdit} ref={editButtonRef}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </li>
  );
}

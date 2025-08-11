import type { Task, TaskAction } from "../types/task";
import { INITIAL_TASKS } from "../constants/tasks";
import { useReducer, type ReactNode } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext";

// eslint-disable-next-line react-refresh/only-export-components
export function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "added": {
      if (action.content.trim() === "") return tasks;
      return [
        {
          id: crypto.randomUUID(),
          content: action.content,
          completed: false,
          updatedAt: Date.now(),
        },
        ...tasks,
      ];
    }
    case "contentChanged": {
      return tasks.map((t) =>
        t.id === action.id
          ? { ...t, content: action.content, updatedAt: Date.now() }
          : t,
      );
    }
    case "toggled": {
      return tasks.map((t) =>
        t.id === action.id ? { ...t, completed: !t.completed } : t,
      );
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      const exhaustiveCheck: never = action;
      throw new Error("Unknown action: " + exhaustiveCheck);
    }
  }
}

type TasksProviderProps = {
  children: ReactNode;
};

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, dispatch] = useReducer(tasksReducer, INITIAL_TASKS);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

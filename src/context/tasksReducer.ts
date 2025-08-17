import type { Task, TaskAction } from "../types/task";

export function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "added": {
      if (action.content.trim() === "") return tasks;
      return [
        {
          id: action.id,
          content: action.content,
          completed: false,
          updatedAt: action.updatedAt,
        },
        ...tasks,
      ];
    }
    case "contentChanged": {
      return tasks.map((t) =>
        t.id === action.id
          ? { ...t, content: action.content, updatedAt: action.updatedAt }
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

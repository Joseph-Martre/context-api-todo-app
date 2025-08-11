import { createContext } from "react";
import type { Task, TaskAction } from "../types/task";

export const TasksContext = createContext<Task[] | null>(null);
export const TasksDispatchContext =
  createContext<React.Dispatch<TaskAction> | null>(null);

import { TasksContext } from "../context/TasksContext";
import { useContext } from "react";

export function useTasks() {
  const tasks = useContext(TasksContext);
  if (!tasks) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return tasks;
}

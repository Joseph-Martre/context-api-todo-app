import { TasksDispatchContext } from "../context/TasksContext";
import { useContext } from "react";

export function useTasksDispatch() {
  const tasks = useContext(TasksDispatchContext);
  if (!tasks) {
    throw new Error("useTasksDispatch must be used within a TaskProvider");
  }
  return tasks;
}

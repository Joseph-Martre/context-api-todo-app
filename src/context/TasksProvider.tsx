import { INITIAL_TASKS } from "../constants/tasks";
import { useReducer, type ReactNode } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext";
import { tasksReducer } from "./tasksReducer";

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

import { TasksProvider } from "../context/TasksProvider";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

export function TaskApp() {
  return (
    <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

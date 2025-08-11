import { randomize } from "../utils/math";
import type { Task } from "../types/task";

export const INITIAL_TASKS: Task[] = [
  {
    id: crypto.randomUUID(),
    completed: true,
    updatedAt: Date.now() - randomize(1000 * 60 * 5),
    content: "Wake up",
  },
  {
    id: crypto.randomUUID(),
    completed: false,
    updatedAt: Date.now() - randomize(1000 * 60 * 10),
    content: "Grab a brush",
  },
  {
    id: crypto.randomUUID(),
    completed: false,
    updatedAt: Date.now() - randomize(1000 * 60 * 13),
    content: "Put on a little makeup",
  },
];

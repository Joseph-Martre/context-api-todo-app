import { describe, it, expect } from "vitest";
import { tasksReducer } from "../context/tasksReducer";
import type { Task } from "../types/task";

describe("tasksReducer", () => {
  const initial: Task[] = [
    { id: "1", content: "Task 1", completed: false, updatedAt: Date.now() },
  ];

  it("adds a task", () => {
    const result = tasksReducer(initial, {
      type: "added",
      content: "New task",
    });
    expect(result).toHaveLength(2);
    expect(result[0].content).toBe("New task");
  });

  it("toggles a task", () => {
    const result = tasksReducer(initial, { type: "toggled", id: "1" });
    expect(result[0].completed).toBe(true);
  });

  it("changes content", () => {
    const result = tasksReducer(initial, {
      type: "contentChanged",
      id: "1",
      content: "Updated",
    });
    expect(result[0].content).toBe("Updated");
  });

  it("deletes a task", () => {
    const result = tasksReducer(initial, { type: "deleted", id: "1" });
    expect(result).toHaveLength(0);
  });
});

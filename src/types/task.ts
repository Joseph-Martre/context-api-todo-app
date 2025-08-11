export type Task = {
  id: string;
  content: string;
  completed: boolean;
  updatedAt: number;
};
export type TaskAction =
  | { type: "added"; content: string }
  | { type: "contentChanged"; content: string; id: string }
  | { type: "toggled"; id: string }
  | { type: "deleted"; id: string };

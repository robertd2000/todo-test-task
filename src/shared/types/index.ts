export interface TodoItemType {
  id: string;
  title: string;
  done: boolean;
}

export type Filter = "all" | "completed" | "active";

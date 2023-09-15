import { useEffect, useState } from "react";
import { localStorageController } from "../../lib/local-storage.controller";
import { TodoItemType } from "../../types";

export const useTodos = () => {
  const items = localStorageController.getItem<TodoItemType[]>("todos") || [];
  const [todos, setTodos] = useState<TodoItemType[]>(items);

  useEffect(() => {
    localStorageController.setItem("todos", todos);
  }, [todos]);

  return { todos, setTodos };
};

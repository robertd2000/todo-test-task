import { createContext, useContext } from "react";
import { TodoItemType } from "../../types";

const TodoContext = createContext<{
  todos: TodoItemType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
} | null>(null);

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) throw new Error("Use Todo* component inside TodoContext");

  return context;
};

export default TodoContext;

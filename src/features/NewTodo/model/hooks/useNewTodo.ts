import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodoContext } from "../../../../shared/model";

export const useNewTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const { todos, setTodos } = useTodoContext();

  const createTodo = () => {
    const items = [
      ...todos,
      {
        title: todo,
        done: false,
        id: uuidv4(),
      },
    ];

    if (todo.length) setTodos(items);
    setTodo("");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTodo();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      createTodo();
    }
  };

  return {
    todo,
    onSubmit,
    setTodo,
    handleKeyDown,
  };
};

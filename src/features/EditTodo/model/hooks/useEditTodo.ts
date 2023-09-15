import { useState } from "react";
import { useTodoContext } from "../../../../shared/model";
import { TodoItemType } from "../../../../shared/types";

export const useEditTodo = (todo: TodoItemType) => {
  const { setTodos } = useTodoContext();
  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState<string>("");

  const onEditModeOn = () => {
    if (!todo.done) {
      setIsEditMode(true);
      setTitle(todo.title);
    }
  };

  const onEditModeOf = () => {
    if (!todo.done) {
      saveTodos();
    }
  };

  const saveTodos = () => {
    setTodos((prev) =>
      prev.map((i) => {
        if (i.id === todo.id)
          return {
            ...i,
            title,
          };
        return i;
      })
    );
    setIsEditMode(false);
  };

  const onEdit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveTodos();
    }
  };

  return {
    isEditMode,
    title,
    setTitle,
    onEditModeOn,
    onEditModeOf,
    onEdit,
  };
};

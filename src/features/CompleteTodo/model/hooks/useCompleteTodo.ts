import React, { useState } from "react";
import { useTodoContext } from "../../../../shared/model";
import { TodoItemType } from "../../../../shared/types";

export const useCompleteTodo = ({ id, done }: TodoItemType) => {
  const [checked, setChecked] = useState(done);

  const { todos, setTodos } = useTodoContext();

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkValue = e.target.checked;
    const todosList = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: checkValue,
        };
      }
      return todo;
    });
    setChecked(checkValue);
    setTodos(todosList);
  };

  return { checked, onCheck };
};

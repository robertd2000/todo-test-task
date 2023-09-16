import { useEffect } from "react";
import { useTodoContext } from "../../../../shared/model";
import { Filter } from "../../../../shared/types";
import { getTitle } from "../../lib/title";

export const useTodoList = (filter: Filter) => {
  const { todos } = useTodoContext();

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "all":
        return todo;
      case "completed":
        return todo.done;
      case "active":
        return !todo.done;
    }
  });

  useEffect(() => {
    document.title = getTitle(filter);
  }, [filter]);

  return {
    todos: filteredTodos,
  };
};

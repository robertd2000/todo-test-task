import { useTodoContext } from "../../../../shared/model";
import { Filter } from "../../../../shared/types";

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

  return {
    todos: filteredTodos,
  };
};

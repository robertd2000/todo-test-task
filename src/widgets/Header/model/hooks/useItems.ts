import { useTodoContext } from "../../../../shared/model";

export const useItems = () => {
  const { todos } = useTodoContext();

  return {
    items: todos?.filter((todo) => !todo.done).length || 0,
  };
};

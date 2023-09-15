import { useTodoContext } from "../../../../shared/model";

export const useClearCompleted = () => {
  const { todos, setTodos } = useTodoContext();

  const onClearCompleted = () => {
    const items = todos?.filter((todo) => !todo.done) || [];

    setTodos(items);
  };

  return { onClearCompleted };
};

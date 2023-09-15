import { useTodoContext } from "../../../../shared/model";

export const useDeleteTodo = () => {
  const { setTodos } = useTodoContext();

  const onDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { onDelete };
};

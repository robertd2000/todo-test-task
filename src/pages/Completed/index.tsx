import { TodoList } from "../../widgets/TodoList";

export const Completed = () => {
  return (
    <div>
      <TodoList filter="completed" />
    </div>
  );
};

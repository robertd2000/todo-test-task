import { TodoList } from "../../widgets/TodoList";

export const Active = () => {
  return (
    <div>
      <TodoList filter="active" />
    </div>
  );
};

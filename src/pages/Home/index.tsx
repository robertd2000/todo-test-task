import { NewTodo } from "../../features/NewTodo";
import { TodoList } from "../../widgets/TodoList";

export const Home = () => {
  return (
    <div>
      <NewTodo />
      <TodoList filter="all" />
    </div>
  );
};

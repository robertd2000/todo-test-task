import { FC } from "react";
import { useTodoList } from "../model";
import { TodoItem } from "../../TodoItem";
import { Empty } from "../../../shared/ui";
import { Filter } from "../../../shared/types";
import style from "../styles/todo-list.module.scss";

interface Props {
  filter: Filter;
}
export const TodoList: FC<Props> = ({ filter }) => {
  const { todos } = useTodoList(filter);

  return (
    <div className={style.todoList}>
      {todos.length ? (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      ) : (
        <Empty />
      )}
    </div>
  );
};

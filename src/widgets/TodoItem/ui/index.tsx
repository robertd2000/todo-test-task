import { FC } from "react";
import { TodoItemProps } from "../types";
import style from "../styles/todo-item.module.scss";
import { EditTodo } from "../../../features/EditTodo";
import { CompleteTodo } from "../../../features/CompleteTodo";
import { DeleteTodo } from "../../../features/DeleteTodo";

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className={style.todo}>
      <div className="">
        <CompleteTodo todo={todo} />
        <EditTodo todo={todo} />
      </div>
      <DeleteTodo id={todo.id} />
    </div>
  );
};

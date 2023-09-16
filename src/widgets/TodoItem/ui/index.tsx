import { FC } from "react";
import { EditTodo } from "../../../features/EditTodo";
import { CompleteTodo } from "../../../features/CompleteTodo";
import { DeleteTodo } from "../../../features/DeleteTodo";
import { TodoItemProps } from "../types";
import style from "../styles/todo-item.module.scss";

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className={style.todo}>
      <div className={style.start}>
        <CompleteTodo todo={todo} />
      </div>
      <div className={style.middle}>
        <EditTodo todo={todo} />
      </div>
      <div className={style.end}>
        <DeleteTodo id={todo.id} />  
      </div>
    </div>
  );
};

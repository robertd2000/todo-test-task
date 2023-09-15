import { FC } from "react";
import { DeleteTodoProps } from "../types";
import { XSquare } from "lucide-react";
import { useDeleteTodo } from "../model";
import style from "../styles/delete-todo.module.scss";

export const DeleteTodo: FC<DeleteTodoProps> = ({ id }) => {
  const { onDelete } = useDeleteTodo();

  return <XSquare onClick={() => onDelete(id)} className={style.delete} />;
};

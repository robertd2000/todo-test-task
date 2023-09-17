import { FC } from "react";
import { CompleteTodoProps } from "../types";
import style from "../styles/completed.module.scss";
import { useCompleteTodo } from "../model";

export const CompleteTodo: FC<CompleteTodoProps> = ({ todo }) => {
  const { checked, onCheck } = useCompleteTodo(todo);

  return (
    <input
      id={"complete"}
      type="checkbox"
      checked={checked}
      onChange={onCheck}
      className={style.input}
    />
  );
};

import { FC } from "react";
import { EditTodoProps } from "../types";
import { useEditTodo } from "../model";

export const EditTodo: FC<EditTodoProps> = ({ todo }) => {
  const { isEditMode, title, setTitle, onEditModeOn, onEditModeOf, onEdit } =
    useEditTodo(todo);

  return (
    <div onClick={onEditModeOn}>
      {isEditMode ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={onEdit}
          onBlur={onEditModeOf}
          autoFocus
        />
      ) : (
        <span className={`font-semibold ${todo.done ? "line-through" : ""}`}>
          {todo.title}
        </span>
      )}
    </div>
  );
};

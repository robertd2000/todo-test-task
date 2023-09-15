import { ReactNode } from "react";
import { TodoItemType } from "../../../shared/types";

export interface TodoItemProps {
  todo: TodoItemType;
  completeComponent?: ReactNode;
  deleteComponent?: ReactNode;
}

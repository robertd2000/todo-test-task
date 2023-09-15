import { useClearCompleted } from "../model";
import style from "../styles/clear-completed.module.scss";

export const ClearCompleted = () => {
  const { onClearCompleted } = useClearCompleted();

  return (
    <span onClick={onClearCompleted} className={style.clear}>
      Clear completed
    </span>
  );
};

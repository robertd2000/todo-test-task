import { useNewTodo } from "../model";
import style from "../styles/new-todo.module.scss";

export const NewTodo = () => {
  const { todo, onSubmit, setTodo, handleKeyDown } = useNewTodo();

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <label htmlFor="input" className="">
        New todo
      </label>
      <div className={style.controls}>
        <div className=""></div>
        <input
          id="input"
          placeholder="What needs to be done?"
          required
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" id="submit" data-testid="submit">
          New todo
        </button>
      </div>
    </form>
  );
};

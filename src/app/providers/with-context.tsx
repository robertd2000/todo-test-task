import TodoContext from "../../shared/model/hooks/useContext";
import { useTodos } from "../../shared/model";

const withContext = (component: Component) => () => {
  const { todos, setTodos } = useTodos();

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {component()}
    </TodoContext.Provider>
  );
};

export default withContext;

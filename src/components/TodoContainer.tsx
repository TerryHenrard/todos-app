import { useSelector } from "react-redux";
import { RootState } from "../stores/todoStore";
import { TodoItem } from "./TodoItem";

const TodoContainer: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todoReducer.todos);
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={false} />
      ))}
    </div>
  );
};

export default TodoContainer;

import { useSelector } from "react-redux";
import { RootState } from "../stores/todoStore";
import { TodoItem } from "./TodoItem";

const TodoContainer: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todoReducer.todos);

  return (
    <div className="flex flex-col gap-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TodoContainer;

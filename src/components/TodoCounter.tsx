import { useSelector } from "react-redux";
import { RootState } from "../stores/todoStore";

export const TodoCounter: React.FC = () => {
  const todoCount = useSelector((state: RootState) => state.todoReducer.todos.length);
  return (
    <>
      <h1 className="text-center text-5xl m-3">
        {todoCount} todo{todoCount > 1 ? "'s" : ""}
      </h1>
    </>
  );
};

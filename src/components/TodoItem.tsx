import { useState } from "react";
import type TodoType from "../types/TodoType";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todoSlice";

export const TodoItem: React.FC<TodoType> = ({ id, text, completed: initialCompleted }) => {
  const [isCompleted, setIsCompleted] = useState(initialCompleted);
  const dispatch = useDispatch();

  const handleDynamicTextStyle: string = isCompleted ? "line-through" : "";

  const updateTodoStatus = (): void => {
    setIsCompleted(!isCompleted);
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <p className={handleDynamicTextStyle}>
        {id} {text}
      </p>
      <input type="checkbox" checked={isCompleted} onChange={updateTodoStatus} />
    </div>
  );
};

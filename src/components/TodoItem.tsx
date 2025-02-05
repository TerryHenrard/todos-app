import { useState } from "react";
import type TodoType from "../types/TodoType";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../features/todoSlice";
import React from "react";

export const TodoItem: React.FC<TodoType> = ({
  id,
  text: initialText,
  completed: initialCompleted,
}) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(initialCompleted);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState<string>(initialText);

  const dispatch = useDispatch();

  const isEditingClass = isEditing ? "bg-white" : "";
  const isCompletedClass = isCompleted ? "line-through" : "";

  const updateTodoStatus = (): void => {
    setIsCompleted(!isCompleted);
    dispatch(toggleTodo(id));
  };

  const toggleEditMode = (event: React.MouseEvent<HTMLImageElement>): void => {
    event.stopPropagation();
    setIsEditing(!isEditing);
  };

  const handleEditTodo = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setText(target.value);
    dispatch(editTodo({ id, text: target.value }));
  };

  const handleDeleteTodo = (): void => {
    dispatch(deleteTodo(id));
  };

  return (
    <div
      className={
        "flex justify-between items-center gap-2 p-2 bg-blue-100 w-2/3 min-w-[300px] max-w-[800px] mx-auto rounded-xl cursor-pointer hover:bg-blue-200 relative"
      }
    >
      <img
        src="/src/assets/images/delete.png"
        alt="Dots that indicates a draggable item"
        className="w-4"
        onClick={handleDeleteTodo}
      />
      <input
        type="text"
        className={`text-lg select-none p-1.5 rounded-2xl focus:outline-0 grow ${isCompletedClass} ${isEditingClass}`}
        value={text}
        readOnly={!isEditing}
        onChange={handleEditTodo}
      />
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={updateTodoStatus}
        className="w-5 h-5 cursor-pointer accent-blue-500 hover:accent-blue-600"
      />
      <img
        src="/src/assets/images/edit.png"
        alt="Edit logo"
        className="w-5 absolute left-full mx-5"
        onClick={toggleEditMode}
      />
    </div>
  );
};

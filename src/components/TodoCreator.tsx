import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const TodoCreator: React.FC = () => {
  const [todoText, setTodoText] = useState<string>("");
  const dispatch = useDispatch();

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(target.value);
  };

  const handleSubmitTodoForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (todoText.trim().length === 0) {
      return;
    }
    dispatch(addTodo(todoText));
  };

  return (
    <form
      className="flex justify-between gap-2 p-4 bg-blue-100 w-2/3 min-w-[300px] max-w-[800px] mx-auto my-5 rounded-xl"
      onSubmit={handleSubmitTodoForm}
    >
      <input
        placeholder={"Working out"}
        type={"text"}
        className="focus:outline-0 flex-grow"
        value={todoText}
        onChange={handleInputChange}
      />
      <input
        type={"submit"}
        value={"Add"}
        className="bg-blue-500 rounded-3xl px-7.5 py-2 hover:cursor-pointer"
      />
    </form>
  );
};

export default TodoCreator;

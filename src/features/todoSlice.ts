import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type TodoType from "../types/TodoType";
import { TodoAPI } from "../services/todoAPI";

const api = new TodoAPI();

export interface todoState {
  todos: TodoType[];
}

const initialState: todoState = {
  todos: api.getAllTodos(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      api.addTodo(action.payload);
      state.todos.push({ text: action.payload, completed: false, id: Date.now() });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
        api.saveTodos(state.todos);
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;

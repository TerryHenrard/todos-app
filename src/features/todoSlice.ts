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

    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const editedTodo = state.todos.find((todo) => todo.id === action.payload.id);

      if (editedTodo) {
        editedTodo.text = action.payload.text;
        api.saveTodos(state.todos);
      }
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);

      if (index !== -1) {
        state.todos.splice(index, 1);
        api.saveTodos(state.todos);
      }
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

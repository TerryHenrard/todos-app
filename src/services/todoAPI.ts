import type TodoType from "../types/TodoType";

export class TodoAPI {
  private readonly STORAGE_KEY = "todos";

  /**
   * Retrieves all todos from local storage.
   * @returns {TodoType[]} An array of Todo objects. If no todos exist, returns an empty array.
   */
  getAllTodos(): TodoType[] {
    const todos = localStorage.getItem(this.STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  }

  /**
   * Saves the todo items to the local storage.
   * @param todos - Array of Todo items to be saved
   * @throws {TypeError} If todos parameter cannot be converted to JSON
   */
  saveTodos(todos: TodoType[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
  }

  /**
   * Adds a new todo item to the list of todos.
   * @param text - The text content of the todo item
   * @returns {TodoType} The newly created todo item
   */
  addTodo(text: string): TodoType {
    const todos = this.getAllTodos();
    const newTodo: TodoType = {
      id: Date.now(),
      text,
      completed: false,
    };
    todos.push(newTodo);
    this.saveTodos(todos);
    return newTodo;
  }

  /**
   * Deletes a todo item from storage by its ID.
   *
   * @param id - The unique identifier of the todo item to delete
   * @returns void
   */
  deleteTodo(id: number): void {
    const todos = this.getAllTodos();
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return;
    }
    todos.splice(index, 1);
    this.saveTodos(todos);
  }

  /**
   * Toggles the completion status of a todo item.
   * @param id - The unique identifier of the todo item to toggle
   */
  toggleTodo(id: number): void {
    const todos = this.getAllTodos();
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      return;
    }
    todo.completed = !todo.completed;
    this.saveTodos(todos);
  }
}

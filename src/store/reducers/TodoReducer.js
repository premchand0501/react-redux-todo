import { TodoActions } from "../actions/TodoActions";
import { TodoStateActions } from "../actions/TodoStateActions";

export const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return [...todos, action.todo];
    case TodoActions.REMOVE_TODO:
      return todos.filter(todo => todo.id !== action.todo.id);
    case TodoActions.TOGGLE_STATUS:
      const toggledTodos = todos.map(todo => {
        if (todo.id === action.todo.id) {
          todo.status = !todo.status;
        }
        return todo;
      });
      return toggledTodos;
    case TodoActions.UPDATE_TODO:
      const updatedTodos = todos.filter(todo => {
        if (todo.id === action.todo.id) {
          todo.title = action.todo.title;
        }
        return todo;
      });
      return updatedTodos;
    default:
      return [...todos];
  }
}
export const FilterReducer = (filter = '', action) => {
  switch (action.type) {
    case TodoStateActions.COMPLETED:
    case TodoStateActions.IN_PROGRESS:
    case TodoStateActions.ALL:
      return action.filter;
    default: return filter;
  }
}
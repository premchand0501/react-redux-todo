import { TodoActions } from "../actions/TodoActions";

const editTodo = {
  id: -1,
  title: '',
  status: false
}

export const editTodoReducer = (editingTodo = editTodo, action) => {
  switch (action.type) {
    case TodoActions.EDIT_TODO:
      return { ...action.todo }
    case TodoActions.RESET_EDIT_TODO:
      return {
        id: -1,
        title: '',
        status: false
      }
    default: return { ...editingTodo };
  }
}
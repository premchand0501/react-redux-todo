import { combineReducers } from "redux";
import { todoReducer, FilterReducer } from './TodoReducer';
import { editTodoReducer } from './EditTodoReducer';

export const rootReducer = combineReducers({ todoReducer, editTodoReducer, FilterReducer });
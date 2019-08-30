import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { PropTypes } from 'prop-types';
import { TodoActions } from '../store/actions/TodoActions';
import { TodoStateActions } from '../store/actions/TodoStateActions';
import TodoFilter from './TodoFilter';

const TodoList = ({ todos, filter, removeTodo, toggleStatus, editTodo }) => (
  <div className="w-100 pl-3 pr-3">
    <div className="d-flex align-items-center justify-content-between mb-3">
      <h4 className="list-group-header m-0">Todo List</h4>
      <TodoFilter />
    </div>
    <ul className="list-group">
      {
        todos.length > 0 ?
          todos.map((todo, index) => (
            <TodoItem todo={todo} key={index} toggleStatus={toggleStatus} removeTodo={removeTodo}
              editTodo={editTodo} />
          )) :
          (<li className="list-group-item">No {filter.toLowerCase()} todos yet.</li>)
      }
    </ul>
    {
      todos.length > 0 ? (
        <p className="mt-3"><small><em>* Click on the todo item to edit that</em></small></p>
      ) : ''
    }

  </div>
)

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case TodoStateActions.COMPLETED:
      return todos.filter(todo => todo.status === true)
    case TodoStateActions.IN_PROGRESS:
      return todos.filter(todo => todo.status !== true)
    default: return todos;
  }
}
const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todoReducer, state.FilterReducer),
  filter: state.FilterReducer
});
const mapDispatchToProps = (dispatch) => ({
  toggleStatus: (todo) => {
    dispatch({ type: TodoActions.TOGGLE_STATUS, todo: todo })
  },
  removeTodo: (todo) => {
    dispatch({ type: TodoActions.REMOVE_TODO, todo: todo })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

TodoList.propTypes = {
  todos: PropTypes.array
}
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { TodoActions } from '../store/actions/TodoActions';

const TodoItem = ({ todo, toggleStatus, removeTodo, editingTodo, editTodo }) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between" disabled={editingTodo.id === todo.id}>

      <div className="d-flex align-items-center justify-content-start">
        <label className="checkcontainer">
          <input className="form-check-input" type="checkbox" checked={todo.status}
            onChange={() => toggleStatus(todo)} />
          <span className="checkmark"></span>
        </label>
        <label className="form-check-label" title="Click to edit"
          style={{ textDecoration: todo.status ? 'line-through' : 'none' }}
          onClick={() => editTodo(todo)}>{todo.title}</label>
      </div>
      <button className="btn btn-danger delete-btn" onClick={() => removeTodo(todo)}>&times;</button>
    </li>
  )
}
TodoItem.propTypes = {
  todo: PropTypes.object
}
const mapStateToProps = (state) => ({
  editingTodo: state.editTodoReducer
});
const mapDispatchToProps = (dispatch) => ({
  editTodo(todo) {
    dispatch({ type: TodoActions.EDIT_TODO, todo });
    document.querySelector('.form-control').scrollIntoView({ behavior: 'smooth' });
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
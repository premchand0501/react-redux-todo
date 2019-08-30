import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TodoActions } from '../store/actions/TodoActions';

class TodoInput extends Component {
  updateInputValue(value) {
    const todo = this.props.editingTodo;
    todo.title = value;
    this.props.updateEditingTodo(todo);
  }
  submitForm(e) {
    e.preventDefault();
    console.log(this.props.editingTodo);
    if (this.props.editingTodo.id >= 0) {
      this.props.updateTodo(this.props.editingTodo);
    } else {
      this.props.addTodo(this.props.todos, this.props.editingTodo);
    }
  }
  render() {
    return (
      <div className="container" style={{ marginBottom: '2rem' }}>
        <div className="row">
          <form className="col col-12" onSubmit={(e) => this.submitForm(e)}>
            <div className="input-group">
              {
                this.props.editingTodo.id >= 0 ? (
                  <div className="input-group-prepend">
                    <button className="btn btn-danger" type="reset" onClick={this.props.resetEditingTodo}>Cancel</button>
                  </div>
                ) : ''
              }
              <input type="text" placeholder="Write your todo here.." className="form-control"
                value={this.props.editingTodo.title}
                onChange={(e) => this.updateInputValue(e.target.value)} />
              <div className="input-group-append">
                <button className="btn btn-info" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
TodoInput.propTypes = {
  updateTodo: PropTypes.func,
  saveTodo: PropTypes.func,
  editingTodo: PropTypes.object
}
const mapStateToProps = (state) => ({
  todos: state.todoReducer,
  editingTodo: state.editTodoReducer
})
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todos, newTodo) => {
    if (newTodo.title.length === 0) {
      return;
    }
    newTodo.id = todos.length;
    dispatch({ type: TodoActions.ADD_TODO, todo: newTodo })
    dispatch({ type: TodoActions.RESET_EDIT_TODO, todo: {} })
  },
  updateTodo: (todo) => {
    dispatch({ type: TodoActions.UPDATE_TODO, todo })
    dispatch({ type: TodoActions.RESET_EDIT_TODO, todo: {} })
  },
  updateEditingTodo: (todo) => {
    dispatch({ type: TodoActions.EDIT_TODO, todo })
  },
  resetEditingTodo: () => {
    dispatch({ type: TodoActions.RESET_EDIT_TODO })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
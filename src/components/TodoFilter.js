import React from 'react';
import { connect } from 'react-redux';
import { TodoStateActions } from '../store/actions/TodoStateActions';

const TodoFilter = ({ filter, applyFilter }) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className={`btn ${filter === '' ? 'btn-info' : 'btn-outline-secondary'}`}
        onClick={() => applyFilter(TodoStateActions.ALL)}>All</button>
      <button type="button" className={`btn ${filter === TodoStateActions.COMPLETED ? 'btn-info' : 'btn-outline-secondary'}`}
        onClick={() => applyFilter(TodoStateActions.COMPLETED)}>Completed</button>
      <button type="button" className={`btn ${filter === TodoStateActions.IN_PROGRESS ? 'btn-info' : 'btn-outline-secondary'}`}
        onClick={() => applyFilter(TodoStateActions.IN_PROGRESS)}>In Progress</button>
    </div>
  )
}
const mapStateToProps = (state) => ({
  filter: state.FilterReducer
})
const mapDispatchToProps = (dispatch) => ({
  applyFilter(type) {
    dispatch({ type, filter: type })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)
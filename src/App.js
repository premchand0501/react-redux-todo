import React, { Component } from 'react';
import './App.scss';
import TodoInput from './components/TodoInput';
import logo from './logo.svg';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <div className="text-center logo">
          <img src={logo} alt="logo" style={{ maxWidth: '4rem' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Todo App</span>
        </div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;

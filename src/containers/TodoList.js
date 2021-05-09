import React from 'react';
import initialTodos from '../constants/initialState';
import '../styles/ToDoList.css';

const ToDoList = () => (
  <div className="boardView">
    <div>
      <h2>Not started</h2>
      <p>{initialTodos[0].tname}</p>
    </div>
    <div>
      <h2>In progress</h2>
      <p>{initialTodos[1].tname}</p>
    </div>
    <div>
      <h2>Completed</h2>
      <p>{initialTodos[2].tname}</p>
    </div>
  </div>
);

export default ToDoList;

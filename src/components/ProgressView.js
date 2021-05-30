import '../styles/ProgressView.css';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import NotStarted from './NotStarted';
import InProgress from './InProgress';
import Completed from './Completed';

const ProgressView = ({ setParentTask, currentToDos }) => {
  const [progressTodos, setProgressTodos] = useState(currentToDos);
  useEffect(() => {
    setProgressTodos(progressTodos);
  }, [currentToDos]);
  let notStartedTodos;
  let inProgressTodos;
  let completedTodos;
  if (currentToDos.length > 0) {
    notStartedTodos = currentToDos.filter((todo) => todo.progress === 'Not started');
    inProgressTodos = currentToDos.filter((todo) => todo.progress === 'In progress');
    completedTodos = currentToDos.filter((todo) => todo.progress === 'Completed');
  }
  return (
    <div className="progress-view-container">
      <div className="progress-each">
        <NotStarted setParentTask={setParentTask} notStartedTodos={notStartedTodos} />
      </div>
      <div className="progress-each">
        <InProgress setParentTask={setParentTask} inProgressTodos={inProgressTodos} />
      </div>
      <div className="progress-each">
        <Completed setParentTask={setParentTask} completedTodos={completedTodos} />
      </div>
      {console.log('Current Todos in ProgressView', currentToDos)}
      {console.log('progress Todos in ProgressView', progressTodos)}
    </div>
  );
};

ProgressView.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  currentToDos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

ProgressView.defaultProps = {
  currentToDos: [],
};

export default ProgressView;

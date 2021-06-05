import '../styles/ProgressView.css';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import NotStarted from './NotStarted';
import InProgress from './InProgress';
import Completed from './Completed';

const ProgressView = ({ setParentTask, currentToDos }) => {
  const [progressTodos, setProgressTodos] = useState(currentToDos);
  useEffect(() => {
    setProgressTodos(currentToDos);
  }, [currentToDos]);
  console.log('Current Todos in ProgressView', currentToDos);
  let notStartedTodos;
  let inProgressTodos;
  let completedTodos;
  if (progressTodos[1]) {
    notStartedTodos = progressTodos[1]['Not started'];
    inProgressTodos = progressTodos[1]['In progress'];
    completedTodos = progressTodos[1].Completed;
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

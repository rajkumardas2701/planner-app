import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const InProgress = ({ setParentTask, inProgressTodos, classN }) => {
  const [showForm, setShowForm] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const handleExpansion = (e) => {
    e.preventDefault();
    setShowTask(!showTask);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  const status = 'In progress';
  return (
    <div>
      <div className="progress-title-section">
        <h4 className="progress-title">In progress</h4>
        {
          (classN === 'progress-view-container')
            ? ('')
            : (
              <button
                type="button"
                onClick={handleExpansion}
              >
                {'>'}
              </button>
            )
        }
      </div>
      {
        (classN === 'progress-view-container')
          ? (<button type="button" onClick={handleClick} className="progress-btns">+ Add Task</button>)
          : ''
      }
      { showForm
      && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} status={status} /> }
      {
        (classN === 'progress-view-container')
          ? (
            (inProgressTodos && inProgressTodos.length > 0)
        && (inProgressTodos.map((todo) => <Task todo={todo} key={todo.id} />))
          )
          : (showTask && (inProgressTodos && inProgressTodos.length > 0)
        && (inProgressTodos.map((todo) => <Task todo={todo} key={todo.id} />)))
      }
    </div>
  );
};

InProgress.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  inProgressTodos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  classN: PropTypes.string.isRequired,
};

InProgress.defaultProps = {
  inProgressTodos: [],
};

export default InProgress;

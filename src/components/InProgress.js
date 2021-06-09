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
          ? (
            <button type="button" onClick={handleClick} className="progress-btns">
              {' '}
              <p className="add-icon">+</p>
              <p className="add-icon-title">Add task</p>
            </button>
          )
          : ''
      }
      <div className="add-task">
        { showForm
        && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} status={status} /> }
      </div>
      <div className="progress-view-alltasks">
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

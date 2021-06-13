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
    const element = document.getElementById('in-progress-no-dues');
    if (document.getElementsByClassName('angle-down-reverse-in-progress').length > 0) {
      element.classList.remove('angle-down-reverse-in-progress');
    } else {
      element.classList.add('angle-down-reverse-in-progress');
    }
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
                className="unschedule-button-inProgress"
                id="in-progress-no-dues"
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
      {
          (classN === 'progress-view-container')
            ? (
              <div className="progress-view-alltasks">
                {
                (inProgressTodos && inProgressTodos.length > 0)
                && (inProgressTodos.map((todo) => <Task todo={todo} key={todo.id} />))
              }
              </div>
            )
            : (showTask && (inProgressTodos && inProgressTodos.length > 0)
          && (inProgressTodos.map((todo) => <Task todo={todo} key={todo.id} />)))
        }
    </div>
  );
};

InProgress.propTypes = {
  setParentTask: PropTypes.func,
  inProgressTodos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  classN: PropTypes.string.isRequired,
};

InProgress.defaultProps = {
  inProgressTodos: [],
  setParentTask: () => {},
};

export default InProgress;

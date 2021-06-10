import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const Completed = ({ setParentTask, completedTodos, classN }) => {
  const [showForm, setShowForm] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const handleExpansion = (e) => {
    e.preventDefault();
    setShowTask(!showTask);
    const element = document.getElementById('completed-no-dues');
    if (document.getElementsByClassName('angle-down-reverse-completed').length > 0) {
      element.classList.remove('angle-down-reverse-completed');
    } else {
      element.classList.add('angle-down-reverse-completed');
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  const status = 'Completed';
  return (
    <div>
      <div className="progress-title-section">
        <h4 className="progress-title">Completed</h4>
        {
          (classN === 'progress-view-container')
            ? ('')
            : (
              <button
                type="button"
                onClick={handleExpansion}
                className="unschedule-button-completed"
                id="completed-no-dues"
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
              (completedTodos && completedTodos.length > 0)
              && (completedTodos.map((todo) => <Task todo={todo} key={todo.id} />))
            }
              </div>
            )
            : (
              <div className="unscheduled-progress-view-alltasks">
                {
                (showTask && (completedTodos && completedTodos.length > 0)
                && (completedTodos.map((todo) => <Task todo={todo} key={todo.id} status={status} />)))
              }
              </div>
            )

        }
    </div>
  );
};

Completed.propTypes = {
  setParentTask: PropTypes.func,
  completedTodos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  classN: PropTypes.string.isRequired,
};

Completed.defaultProps = {
  completedTodos: [],
  setParentTask: () => {},
};

export default Completed;

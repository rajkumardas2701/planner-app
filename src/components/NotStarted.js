import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const NotStarted = ({ setParentTask, notStartedTodos, classN }) => {
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
  const status = 'Not started';
  return (
    <div>
      <div className="progress-title-section">
        <h4 className="progress-title">Not started</h4>
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
              <p className="add-icon">+</p>
              <p className="add-icon-title">Add task</p>
            </button>
          )
          : ''
      }
      <div className="add-task">
      {
        showForm
          && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} status={status} />
      }
      </div>
      {
        (classN === 'progress-view-container')
          ? (
            (notStartedTodos && notStartedTodos.length > 0)
          && (notStartedTodos.map((todo) => <Task todo={todo} key={todo.id} />))
          )
          : (showTask && (notStartedTodos && notStartedTodos.length > 0)
        && (notStartedTodos.map((todo) => <Task todo={todo} key={todo.id} />)))
      }
    </div>
  );
};

NotStarted.propTypes = {
  setParentTask: PropTypes.func,
  notStartedTodos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  classN: PropTypes.string.isRequired,
};

NotStarted.defaultProps = {
  notStartedTodos: [],
  setParentTask: () => {},
};

export default NotStarted;

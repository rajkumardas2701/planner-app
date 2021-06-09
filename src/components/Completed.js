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
            (completedTodos && completedTodos.length > 0)
      && (completedTodos.map((todo) => <Task todo={todo} key={todo.id} />))
          )
          : (showTask && (completedTodos && completedTodos.length > 0)
        && (completedTodos.map((todo) => <Task todo={todo} key={todo.id} />)))
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

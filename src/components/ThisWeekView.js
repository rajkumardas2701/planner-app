import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const ThisWeekView = ({ setParentTask, thisWeek }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <div className="due-date-each">
      <h4 className="dueDate-title">This week</h4>
      <button type="button" onClick={handleClick} className="due-date-btns">
        <p className="add-icon">+</p>
        <p className="add-icon-title">Add task</p>
      </button>
      <div className="add-task">
        { showForm
        && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} /> }
      </div>
      {
        thisWeek.map((todo) => <Task todo={todo} key={todo.id} />)
      }
    </div>
  );
};

ThisWeekView.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  thisWeek: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

ThisWeekView.defaultProps = {
  thisWeek: [],
};

export default ThisWeekView;

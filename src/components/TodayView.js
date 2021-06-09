import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const TodayView = ({ setParentTask, today }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <div className="due-date-each">
      <h4 className="dueDate-title">Today</h4>
      <button type="button" onClick={handleClick} className="due-date-btns">
        <p className="add-icon">+</p>
        <p className="add-icon-title">Add task</p>
      </button>
      <div className="add-task">
        { showForm
        && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} /> }
      </div>
      {
        today.map((todo) => <Task todo={todo} key={todo.id} />)
      }
    </div>
  );
};

TodayView.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  today: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

TodayView.defaultProps = {
  today: [],
};

export default TodayView;

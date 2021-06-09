import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import NoDueAndDueDateView from './NoDueAndDueDateView';
import NoDueProgressView from './NoDueProgressView';

const ScheduleNoDues = ({ allTasks, groupBy, setParentTask }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  // console.log(allTasks);
  // console.log(groupBy);
  return (
    <div>
      <h4>Unscheduled tasks</h4>
      <div>
        <button type="button" onClick={handleClick} className="progress-btns">+ Add Task</button>
        { showForm
        && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} /> }
      </div>
      {
        (groupBy === 'Progress')
          ? (<NoDueProgressView allTasks={allTasks} />)
          : (<NoDueAndDueDateView allTasks={allTasks} />)
      }
    </div>
  );
};

ScheduleNoDues.propTypes = {
  allTasks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  groupBy: PropTypes.string.isRequired,
  setParentTask: PropTypes.func.isRequired,
};

export default ScheduleNoDues;

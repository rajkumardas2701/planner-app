import { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';

const InProgress = ({ setParentTask }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  const status = 'In progress';
  return (
    <div>
      <h4 className="progress-title">In progress</h4>
      <button type="button" onClick={handleClick} className="progress-btns">+ Add Task</button>
      { showForm
      && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} status={status} /> }
    </div>
  );
};

InProgress.propTypes = {
  setParentTask: PropTypes.func.isRequired,
};

export default InProgress;

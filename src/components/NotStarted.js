import { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';

const NotStarted = ({ setParentTask }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  const status = 'Not started';
  return (
    <div>
      <h4 className="progress-title">Not started</h4>
      <button type="button" onClick={handleClick} className="progress-btns">+ Add Task</button>
      { showForm
      && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} status={status} /> }
    </div>
  );
};

NotStarted.propTypes = {
  setParentTask: PropTypes.func.isRequired,
};

export default NotStarted;

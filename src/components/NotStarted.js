import { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const NotStarted = ({ setParentTask, notStartedTodos }) => {
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
      {
        (notStartedTodos && notStartedTodos.length > 0)
        && (notStartedTodos.map((todo) => <Task todo={todo} key={todo.id} />))
      }
    </div>
  );
};

NotStarted.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  notStartedTodos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

NotStarted.defaultProps = {
  notStartedTodos: [],
};

export default NotStarted;

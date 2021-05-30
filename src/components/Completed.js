import { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const Completed = ({ setParentTask, completedTodos }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  const status = 'Completed';
  return (
    <div>
      <h4 className="progress-title">Completed</h4>
      <button type="button" onClick={handleClick} className="progress-btns">+ Add Task</button>
      { showForm
       && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} status={status} /> }
      {
        completedTodos.map((todo) => <Task todo={todo} key={todo.id} />)
      }
    </div>
  );
};

Completed.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  completedTodos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Completed.defaultProps = {
  completedTodos: [],
};

export default Completed;

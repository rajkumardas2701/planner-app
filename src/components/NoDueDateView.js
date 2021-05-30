import { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const NoDueDateView = ({ setParentTask, noDueDate }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <div className="due-date-each">
      <h4 className="dueDate-title">No due date</h4>
      <button type="button" onClick={handleClick} className="due-date-btns">+ Add Task</button>
      { showForm
       && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} /> }
      {
        noDueDate.map((todo) => <Task todo={todo} key={todo.id} />)
      }
    </div>
  );
};

NoDueDateView.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  noDueDate: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

NoDueDateView.defaultProps = {
  noDueDate: [],
};

export default NoDueDateView;

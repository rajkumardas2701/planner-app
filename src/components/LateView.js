import { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';
import '../styles/DueDateEach.css';

const LateView = ({ setParentTask, late }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <div className="due-date-each">
      <h4 className="dueDate-title">Late</h4>
      <button type="button" onClick={handleClick} className="due-date-btns">+ Add Task</button>
      { showForm
       && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} /> }
      {
        late.map((todo) => <Task todo={todo} key={todo.id} />)
      }
    </div>
  );
};

LateView.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  late: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

LateView.defaultProps = {
  late: [],
};

export default LateView;

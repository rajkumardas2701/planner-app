import { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const TodayView = ({ setParentTask, today1 }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <div className="due-date-each">
      <h4 className="dueDate-title">Today</h4>
      <button type="button" onClick={handleClick} className="due-date-btns">+ Add Task</button>
      { showForm
       && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} /> }
      {
        today1.map((todo) => <Task todo={todo} key={todo.id} />)
      }
    </div>
  );
};

TodayView.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  today1: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

TodayView.defaultProps = {
  today1: [],
};

export default TodayView;

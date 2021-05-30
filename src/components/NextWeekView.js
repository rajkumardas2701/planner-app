import { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const NextWeekView = ({ setParentTask, nextWeek }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <div className="due-date-each">
      <h4 className="dueDate-title">Next week</h4>
      <button type="button" onClick={handleClick} className="due-date-btns">+ Add Task</button>
      { showForm
       && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} /> }
      {
        nextWeek.map((todo) => <Task todo={todo} key={todo.id} />)
      }
    </div>
  );
};

NextWeekView.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  nextWeek: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

NextWeekView.defaultProps = {
  nextWeek: [],
};

export default NextWeekView;

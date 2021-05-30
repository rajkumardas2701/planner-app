import { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const TomorrowView = ({ setParentTask, tomorrow }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <div className="due-date-each">
      <h4 className="dueDate-title">Tomorrow</h4>
      <button type="button" onClick={handleClick} className="due-date-btns">+ Add Task</button>
      { showForm
       && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} /> }
      {
        tomorrow.map((todo) => <Task todo={todo} key={todo.id} />)
      }
    </div>
  );
};

TomorrowView.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  tomorrow: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

TomorrowView.defaultProps = {
  tomorrow: [],
};

export default TomorrowView;

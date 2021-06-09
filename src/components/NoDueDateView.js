import { useState } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import Task from './Task';

const NoDueDateView = ({
  setParentTask, noDueDate, classN, classM,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const handleExpansion = (e) => {
    e.preventDefault();
    setShowTask(!showTask);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <div className={classM}>
      <div className="dueDate-title-section">
        <h4 className="dueDate-title">No due date</h4>
        {
          (classN === 'due-date-view-container')
            ? ('')
            : (
              <button
                type="button"
                onClick={handleExpansion}
              >
                {'>'}
              </button>
            )
        }
      </div>
      {
        (classN === 'due-date-view-container')
          ? (<button type="button" onClick={handleClick} className="due-date-btns">+ Add Task</button>)
          : ''
      }
      { showForm
       && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} /> }
      {
        (classN === 'due-date-view-container')
          ? (
            (noDueDate && noDueDate.length > 0)
        && (noDueDate.map((todo) => <Task todo={todo} key={todo.id} />))
          )
          : (
            (showTask && (noDueDate && noDueDate.length > 0)
                 && (noDueDate.map((todo) => <Task todo={todo} key={todo.id} />)))
          )
      }
      {/* {console.log('no due task in noduedateview', noDueDate)} */}
    </div>
  );
};

NoDueDateView.propTypes = {
  setParentTask: PropTypes.func,
  noDueDate: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  classN: PropTypes.string.isRequired,
  classM: PropTypes.string.isRequired,
};

NoDueDateView.defaultProps = {
  noDueDate: [],
  setParentTask: () => {},
};

export default NoDueDateView;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LateView from './LateView';
import TodayView from './TodayView';
import TomorrowView from './TomorrowView';
import FutureView from './FutureView';
import NoDueDateView from './NoDueDateView';

const DueDateView = ({ setParentTask, currentToDos }) => {
  const [dueDateTodos, setDueDateTodos] = useState(currentToDos);
  useEffect(() => {
    setDueDateTodos(currentToDos);
  }, [currentToDos]);
  console.log(dueDateTodos);
  let late;
  let today;
  let tomorrow;
  let future;
  let noDueDate;
  const dateDifference = (value) => {
    const diff = parseInt(((new Date()).getTime() - (new Date(value)).getTime())
    / (1000 * 3600 * 24), 10);
    console.log(diff);
    return diff;
  };
  if (currentToDos.length > 0) {
    late = currentToDos.filter((todo) => dateDifference(todo.dueDate) > 0);
    today = currentToDos.filter((todo) => dateDifference(todo.dueDate) === 0);
    tomorrow = currentToDos.filter((todo) => dateDifference(todo.dueDate) === -1);
    future = currentToDos.filter((todo) => dateDifference(todo.dueDate) < -1);
    noDueDate = currentToDos.filter((todo) => todo.dueDate === '');
  }
  return (
    <div className="due-date-view-container">
      <div className="due-date-each">
        {
          (late.length > 0)
          && (<LateView setParentTask={setParentTask} late={late} />)
        }
      </div>
      <div className="due-date-each">
        {
          (today.length > 0)
          && (<TodayView setParentTask={setParentTask} today={today} />)
        }
      </div>
      <div className="due-date-each">
        {
          (tomorrow.length > 0)
          && (<TomorrowView setParentTask={setParentTask} tomorrow={tomorrow} />)
        }
      </div>
      <div className="due-date-each">
        {
          (future.length > 0)
          && (<FutureView setParentTask={setParentTask} future={future} />)
        }
      </div>
      <div className="due-date-each">
        {
          (noDueDate.length > 0)
          && (<NoDueDateView setParentTask={setParentTask} noDueDate={noDueDate} />)
        }
      </div>
    </div>
  );
};

DueDateView.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  currentToDos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

DueDateView.defaultProps = {
  currentToDos: [],
};

export default DueDateView;

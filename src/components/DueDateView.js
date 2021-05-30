import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LateView from './LateView';
import TodayView from './TodayView';
import TomorrowView from './TomorrowView';
import FutureView from './FutureView';
import NoDueDateView from './NoDueDateView';
import ThisWeekView from './ThisWeekView';

const DueDateView = ({ setParentTask, currentToDos }) => {
  const [dueDateTodos, setDueDateTodos] = useState(currentToDos);
  useEffect(() => {
    setDueDateTodos(currentToDos);
  }, [currentToDos]);
  console.log(dueDateTodos);
  let late;
  let today;
  let tomorrow;
  let thisWeek;
  let future;
  let noDueDate;
  const dateDifference = (value) => {
    const diff = ((new Date(new Date().toISOString().slice(0, 10))).getTime()
    - (new Date(value)).getTime())
    / (1000 * 3600 * 24);
    console.log('Date diff', diff);
    return diff;
  };
  const checkThisWeek = (value) => {
    const date = new Date(value);
    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();
    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay - 1));
    const lastDayofWeek = new Date(firstDayOfWeek);
    lastDayofWeek.setDate(lastDayofWeek.getDate() + 7);
    return date >= firstDayOfWeek && date <= lastDayofWeek;
  };
  if (dueDateTodos.length > 0) {
    late = dueDateTodos.filter((todo) => dateDifference(todo.dueDate) > 0);
    today = dueDateTodos.filter((todo) => dateDifference(todo.dueDate) === 0);
    tomorrow = dueDateTodos.filter((todo) => dateDifference(todo.dueDate) === -1);
    thisWeek = dueDateTodos.filter((todo) => checkThisWeek(todo.dueDate)
    && !today.includes(todo) && !tomorrow.includes(todo));
    future = dueDateTodos.filter((todo) => dateDifference(todo.dueDate) < -1
    && !thisWeek.includes(todo));
    noDueDate = dueDateTodos.filter((todo) => todo.dueDate === '');
  }
  return (
    <div className="due-date-view-container">
      <div className="due-date-each">
        {console.log('late list', late)}
        {
          (late.length > 0)
          && (<LateView setParentTask={setParentTask} late={late} />)
        }
      </div>
      <div className="due-date-each">
        {console.log('today list', today)}
        {
          (today.length > 0)
          && (<TodayView setParentTask={setParentTask} today={today} />)
        }
      </div>
      <div className="due-date-each">
        {console.log('tomorrow list', tomorrow)}
        {
          (tomorrow.length > 0)
          && (<TomorrowView setParentTask={setParentTask} tomorrow={tomorrow} />)
        }
      </div>
      <div className="due-date-each">
        {console.log('this week list', thisWeek)}
        {
          (thisWeek.length > 0)
          && (<ThisWeekView setParentTask={setParentTask} thisWeek={thisWeek} />)
        }
      </div>
      <div className="due-date-each">
        {console.log('future list', future)}
        {
          (future.length > 0)
          && (<FutureView setParentTask={setParentTask} future={future} />)
        }
      </div>
      <div className="due-date-each">
        {console.log('no due list', noDueDate)}
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

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LateView from './LateView';
import TodayView from './TodayView';
import TomorrowView from './TomorrowView';
import FutureView from './FutureView';
import NoDueDateView from './NoDueDateView';
import ThisWeekView from './ThisWeekView';
import NextWeekView from './NextWeekView';
import filterPerDueDate from '../helper/dueDateHelper';
import '../styles/DueDateView.css';

const DueDateView = ({ setParentTask, currentToDos }) => {
  const [dueDateTodos, setDueDateTodos] = useState(currentToDos);
  useEffect(() => {
    setDueDateTodos(currentToDos);
  }, [currentToDos]);
  console.log(dueDateTodos);
  const {
    late,
    today,
    tomorrow,
    thisWeek,
    nextWeek,
    future,
    noDueDate,
  } = filterPerDueDate(dueDateTodos);
  return (
    <div className="due-date-view-container">
      <div>
        {console.log('late list', late)}
        {
          (late.length > 0)
          && (<LateView setParentTask={setParentTask} late={late} />)
        }
      </div>
      <div>
        {console.log('today list', today)}
        {
          (today.length > 0)
          && (<TodayView setParentTask={setParentTask} today={today} />)
        }
      </div>
      <div>
        {console.log('tomorrow list', tomorrow)}
        {
          (tomorrow.length > 0)
          && (<TomorrowView setParentTask={setParentTask} tomorrow={tomorrow} />)
        }
      </div>
      <div>
        {console.log('this week list', thisWeek)}
        {
          (thisWeek.length > 0)
          && (<ThisWeekView setParentTask={setParentTask} thisWeek={thisWeek} />)
        }
      </div>
      <div>
        {console.log('this week list', thisWeek)}
        {
          (nextWeek.length > 0)
          && (<NextWeekView setParentTask={setParentTask} nextWeek={nextWeek} />)
        }
      </div>
      <div>
        {console.log('future list', future)}
        {
          (future.length > 0)
          && (<FutureView setParentTask={setParentTask} future={future} />)
        }
      </div>
      <div>
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

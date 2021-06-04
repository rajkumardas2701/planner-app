import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LateView from './LateView';
import TodayView from './TodayView';
import TomorrowView from './TomorrowView';
import FutureView from './FutureView';
import NoDueDateView from './NoDueDateView';
import ThisWeekView from './ThisWeekView';
import NextWeekView from './NextWeekView';
// import fetchPerDueDate from '../helper/dueDateHelper';
import '../styles/DueDateView.css';

const DueDateView = ({ setParentTask, currentToDos }) => {
  const [dueDateTodos, setDueDateTodos] = useState(currentToDos);
  useEffect(() => {
    setDueDateTodos(currentToDos);
  }, [currentToDos]);
  let late1;
  let today1;
  let tomorrow1;
  let thisWeek1;
  let nextWeek1;
  let future1;
  let noDueDate1;
  if (dueDateTodos[0]) {
    late1 = dueDateTodos[0].Late;
    today1 = dueDateTodos[0].Today;
    tomorrow1 = dueDateTodos[0].Tomorrow;
    thisWeek1 = dueDateTodos[0]['This Week'];
    nextWeek1 = dueDateTodos[0]['Next Week'];
    future1 = dueDateTodos[0].Future;
    noDueDate1 = dueDateTodos[0]['No date'];
  }
  // const {
  //   late,
  //   today,
  //   tomorrow,
  //   thisWeek,
  //   nextWeek,
  //   future,
  //   noDueDate,
  // } = fetchPerDueDate(dueDateTodos[1]);
  // console.log('Extra data fetched');
  // console.log('Late', late);
  // console.log('Today', today);
  // console.log('Tomorrow', tomorrow);
  // console.log('This Week', thisWeek);
  // console.log('Next Week', nextWeek);
  // console.log('Future', future);
  // console.log('No Due Date', noDueDate);
  // if ((late && late.length > 0) && (late1 && late1.length > 0)) {
  //   console.log('inside if condition of due date view');
  //   console.log('length of late', late.length);
  //   console.log('late', late);
  //   late1.push(late[0]);
  //   console.log('late1', late1);
  //   console.log('length of late1', late1.length);
  // } else if ((late && late.length > 0)) {
  //   // late1 = late;
  //   console.log(late);
  // }
  console.log('Updated Late1', late1);
  // if (today && today.length > 0) { today1.push(today); }
  // if (tomorrow && tomorrow.length > 0) { tomorrow1.push(tomorrow); }
  // if (thisWeek && thisWeek.length > 0) { thisWeek1.push(thisWeek); }
  // if (nextWeek && nextWeek.length > 0) { nextWeek1.push(nextWeek); }
  // if (future && future.length > 0) { future1.push(future); }
  // if (noDueDate && noDueDate.length > 0) { noDueDate1.push(noDueDate); }
  // console.log('Current Todos in DueDateView', currentToDos);
  return (
    <div className="due-date-view-container">
      {console.log('current todos in Due Date view', dueDateTodos)}
      {/* {console.log('rendering count in Due Date view', i + 1)} */}
      <div>
        {/* {console.log('late list', late)} */}
        {
          (late1 && late1.length > 0)
          && (<LateView setParentTask={setParentTask} late1={late1} />)
        }
      </div>
      <div>
        {/* {console.log('today list', today)} */}
        {
          (today1 && today1.length > 0)
          && (<TodayView setParentTask={setParentTask} today1={today1} />)
        }
      </div>
      <div>
        {/* {console.log('tomorrow list', tomorrow)} */}
        {
          (tomorrow1 && tomorrow1.length > 0)
          && (<TomorrowView setParentTask={setParentTask} tomorrow1={tomorrow1} />)
        }
      </div>
      <div>
        {/* {console.log('this week list', thisWeek)} */}
        {
          (thisWeek1 && thisWeek1.length > 0)
          && (<ThisWeekView setParentTask={setParentTask} thisWeek1={thisWeek1} />)
        }
      </div>
      <div>
        {/* {console.log('this week list', thisWeek)} */}
        {
          (nextWeek1 && nextWeek1.length > 0)
          && (<NextWeekView setParentTask={setParentTask} nextWeek1={nextWeek1} />)
        }
      </div>
      <div>
        {/* {console.log('future list', future)} */}
        {
          (future1 && future1.length > 0)
          && (<FutureView setParentTask={setParentTask} future1={future1} />)
        }
      </div>
      <div>
        {/* {console.log('no due list', noDueDate)} */}
        {
          (noDueDate1 && noDueDate1.length > 0)
          && (<NoDueDateView setParentTask={setParentTask} noDueDate1={noDueDate1} />)
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

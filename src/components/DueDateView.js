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
  let late;
  let today;
  let tomorrow;
  let thisWeek;
  let nextWeek;
  let future;
  let noDueDate;
  if (dueDateTodos[0]) {
    late = dueDateTodos[0].Late;
    today = dueDateTodos[0].Today;
    tomorrow = dueDateTodos[0].Tomorrow;
    thisWeek = dueDateTodos[0]['This Week'];
    nextWeek = dueDateTodos[0]['Next Week'];
    future = dueDateTodos[0].Future;
    noDueDate = dueDateTodos[0]['No Date'];
  }
  const classN = 'due-date-view-container';
  const classM = 'due-date-each';
  return (
    <div className="due-date-view-container">
      {/* {console.log('current todos in Due Date view', dueDateTodos)} */}
      {/* {console.log('rendering count in Due Date view', i + 1)} */}
      <div>
        {/* {console.log('late list', late)} */}
        {
          (late && late.length > 0)
          && (<LateView setParentTask={setParentTask} late={late} />)
        }
      </div>
      <div>
        {/* {console.log('today list', today)} */}
        {
          (today && today.length > 0)
          && (<TodayView setParentTask={setParentTask} today={today} />)
        }
      </div>
      <div>
        {/* {console.log('tomorrow list', tomorrow)} */}
        {
          (tomorrow && tomorrow.length > 0)
          && (<TomorrowView setParentTask={setParentTask} tomorrow={tomorrow} />)
        }
      </div>
      <div>
        {/* {console.log('this week list', thisWeek)} */}
        {
          (thisWeek && thisWeek.length > 0)
          && (<ThisWeekView setParentTask={setParentTask} thisWeek={thisWeek} />)
        }
      </div>
      <div>
        {/* {console.log('this week list', thisWeek)} */}
        {
          (nextWeek && nextWeek.length > 0)
          && (<NextWeekView setParentTask={setParentTask} nextWeek={nextWeek} />)
        }
      </div>
      <div>
        {/* {console.log('future list', future)} */}
        {
          (future && future.length > 0)
          && (<FutureView setParentTask={setParentTask} future={future} />)
        }
      </div>
      <div>
        {console.log('no due list', noDueDate)}
        {
          (noDueDate && noDueDate.length > 0)
          && (
          <NoDueDateView
            setParentTask={setParentTask}
            noDueDate={noDueDate}
            classN={classN}
            classM={classM}
          />
          )
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

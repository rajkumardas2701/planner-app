import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import { useEffect } from 'react';
import AddTask from './AddTask';
import { enumerateDaysInWeek } from '../helper/calendarHelper';
// import moment from 'moment';
import '../styles/WeekIndicator.css';

const WeekIndicator = ({ selectDate, events, setParentTask }) => {
  const dates = enumerateDaysInWeek(selectDate, events);
  const [showForm, setShowForm] = useState(false);
  const [dateClicked, setDateClicked] = useState('');
  // console.log(setSelectDate);
  // console.log(selectDate);
  // console.log('dates in weekIndicator', dates);
  const handleClick = (e) => {
    e.preventDefault();
    setDateClicked(e.target.parentElement.parentElement.parentElement.dataset.date);
    setShowForm(!showForm);
  };
  return (
    <div className="week-container">
      {
        dates.map((d) => (
          <div
            key={d.date.toString()}
            className="week-date"
            data-date={d.date.toString()}
          >
            <div className="week-date-display">
              <p className="date-label">
                {
                  d.date.getDate()
                }
              </p>
              <button type="button" className="add-task-in-calendar" onClick={handleClick}>
                <p className="add-task-in-calendar-text">+</p>
              </button>
              {
                showForm
                && (dateClicked === (d.date.toString()))
                && (
                  <AddTask
                    setParentTask={setParentTask}
                    setShowForm={setShowForm}
                    dateClicked={dateClicked}
                  />
                )
              }
            </div>
            <div>
              {
                d.dayEvents.map((event) => <p key={event.id} className="task-in-week">{event.name}</p>)
              }
            </div>
          </div>
        ))
      }

    </div>
  );
};

WeekIndicator.propTypes = {
  selectDate: PropTypes.instanceOf(Date).isRequired,
  // setSelectDate: PropTypes.func.isRequired,
  setParentTask: PropTypes.func.isRequired,
  events: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default WeekIndicator;

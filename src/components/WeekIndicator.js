import PropTypes from 'prop-types';
import React from 'react';
// import { useEffect } from 'react';
import { enumerateDaysInWeek } from '../helper/calendarHelper';
// import moment from 'moment';
import '../styles/WeekIndicator.css';

const WeekIndicator = ({ selectDate, events }) => {
  const dates = enumerateDaysInWeek(selectDate, events);
  // console.log(setSelectDate);
  // console.log(selectDate);
  // console.log('dates in weekIndicator', dates);
  return (
    <div className="week-container">
      {
        dates.map((d) => (
          <div
            key={d.date.toString()}
            className="week-date"
          >
            <div className="week-date-display">
              {
                d.date.getDate()
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
  events: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default WeekIndicator;

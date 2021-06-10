import moment from 'moment';
import React from 'react';
import '../styles/WeekdayIndicator.css';

const WeekdayIndicator = () => {
  const weekdays = moment.weekdays();
  return (
    <div className="header-row">
      {
        weekdays.map((day) => (
          <div
            className="week-day"
            key={day}
          >
            {day}
          </div>
        ))
      }
    </div>
  );
};

export default WeekdayIndicator;

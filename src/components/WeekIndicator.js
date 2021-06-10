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
    <tr className="week-container">
      {
        dates.map((d) => (
          <td
            key={d}
            className="week-date"
          >
            <div>
              {
                d.date.getDate()
                // console.log(d.date.getDate())
              }
              {/* {console.log(d.toDate())} */}
            </div>
            <div>
              {
                d.dayEvents.map((event) => <p key={event.id}>{event.name}</p>)
              }
            </div>
          </td>
        ))
      }

    </tr>
  );
};

WeekIndicator.propTypes = {
  selectDate: PropTypes.instanceOf(Date).isRequired,
  // setSelectDate: PropTypes.func.isRequired,
  events: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default WeekIndicator;

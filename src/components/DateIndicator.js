import React from 'react';
import PropTypes from 'prop-types';
import {
  getDayOfMonth,
  // getMonthDayYear,
  getMonth,
  getYear,
} from '../helper/moment-helper';
import { getDatesAndEvents } from '../helper/calendarHelper';

const DateIndicator = ({ selectDate, setSelectDate, events }) => {
  const datesAndEvents = getDatesAndEvents(
    getMonth(selectDate) + 1,
    getYear(selectDate),
    events,
  );
  console.log(setSelectDate);
  console.log('dayEvents in DateIndicator', datesAndEvents);
  const totalSlots = datesAndEvents.map((i) => (
    <td
      className="date-icon"
      key={i.date.toISOString()}
      data-active-month={i.currentMonth}
      data-date={i.date.toString()}
    >
      <div className="date-container">
        <p className="date-label">
          {getDayOfMonth(i.date)}
        </p>
        <div className="date-task">
          {
            i.dayEvents.map((event) => <p key={event.id}>{event.name}</p>)
          }
        </div>
      </div>
    </td>
  ));
  const rows = [];
  let cells = [];
  totalSlots.forEach((data, i) => {
    if (((i % 7 !== 0) || (i === 0)) && (i !== 41)) {
      cells.push(data);
    } else if (i === 41) {
      cells.push(data);
      rows.push(cells);
      cells = [];
    } else {
      rows.push(cells);
      cells = [];
      cells.push(data);
    }
  });
  const monthDates = rows.map((d) => <tr key={d}>{d}</tr>);
  return (
    <>
      {
        monthDates
      }
    </>
  );
};

DateIndicator.propTypes = {
  selectDate: PropTypes.instanceOf(Date).isRequired,
  setSelectDate: PropTypes.func.isRequired,
  events: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default DateIndicator;

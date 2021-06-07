import React from 'react';
import PropTypes from 'prop-types';
import {
  getDayOfMonth,
  // getMonthDayYear,
  getMonth,
  getYear,
} from '../helper/moment-helper';
import { getDatesInMonthDisplay } from '../helper/calendarHelper';

const DateIndicator = ({ selectDate, setSelectDate }) => {
  const datesInMonth = getDatesInMonthDisplay(
    getMonth(selectDate) + 1,
    getYear(selectDate),
  );
  console.log(setSelectDate);
  const totalSlots = datesInMonth.map((i) => (
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
        <div className="date-task">text</div>
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
};

export default DateIndicator;

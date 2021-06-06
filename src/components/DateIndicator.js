import React from 'react';
import PropTypes from 'prop-types';
import {
  getDayOfMonth,
  // getMonthDayYear,
  getMonth,
  getYear,
} from '../helper/moment-helper';
import getDatesInMonthDisplay from '../helper/calendarHelper';

const DateIndicator = ({ selectDate, setSelectDate }) => {
  const datesInMonth = getDatesInMonthDisplay(
    getMonth(selectDate) + 1,
    getYear(selectDate),
  );
  console.log(setSelectDate);
  const monthDates = datesInMonth.map((i) => (
    <div
      key={i.date.toISOString()}
    >
      {getDayOfMonth(i.date)}
    </div>
  ));
  return (
    <div>
      {monthDates}
    </div>
  );
};

DateIndicator.propTypes = {
  selectDate: PropTypes.instanceOf(Date).isRequired,
  setSelectDate: PropTypes.func.isRequired,
};

export default DateIndicator;

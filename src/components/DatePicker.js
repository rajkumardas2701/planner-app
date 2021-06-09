import moment from 'moment';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/DatePicker.css';

const DatePicker = ({
  showMonth, setShowMonth, showYear, setShowYear, selectDate, setSelectDate,
}) => {
  const [firstYear, setFirstYear] = useState(2020);
  const months = moment.monthsShort();
  const years = [];
  let currentYear = moment(selectDate).year();
  const month = moment(selectDate).month();
  for (let i = firstYear; i < firstYear + 12; i += 1) {
    years.push(i);
  }
  const handleYearPanel = () => {
    console.log(setFirstYear);
    setShowMonth(!showMonth);
    setShowYear(!showYear);
  };
  const upYear = () => {
    currentYear -= 1;
    // console.log('Current Year in Date Picker', currentYear);
    setSelectDate(moment(`1-${month + 1}-${currentYear}`, 'DD-MM-YYYY'));
  };
  const downYear = () => {
    currentYear += 1;
    // console.log('Current Year in Date Picker', currentYear);
    setSelectDate(moment(`1-${month + 1}-${currentYear}`, 'DD-MM-YYYY'));
  };
  const handleMonthClick = (e) => {
    e.preventDefault();
    const m = parseInt(moment().month(`${e.target.textContent}`).format('M'), 10);
    setSelectDate(moment(`1-${m}-${currentYear}`, 'DD-MM-YYYY'));
  };
  const handleYearClick = (e) => {
    e.preventDefault();
    const y = parseInt(moment().year(`${e.target.textContent}`).format('YYYY'), 10);
    setSelectDate(moment(`1-${month + 1}-${y}`, 'DD-MM-YYYY'));
    setShowYear(!showYear);
    setShowMonth(!showMonth);
  };
  const handleTodayBtn = () => {
    setSelectDate(moment());
  };
  return (
    <div className="date-picker-section">
      <div className="select-nav-container">
        <button
          type="button"
          onClick={handleYearPanel}
          className="year-selector"
        >
          {
            moment(selectDate).year()
          }
        </button>
        <button type="button" className="year-nav" onClick={upYear}>
          -
        </button>
        <button type="button" className="year-nav" onClick={downYear}>
          +
        </button>
      </div>
      <div className="year-container">
        {
          showYear
          && (years.map((year) => (
            <button
              key={year}
              type="button"
              className="month-btn"
              onClick={handleYearClick}
            >
              {year}
            </button>
          )))
        }
      </div>
      <div className="month-container">
        {
          showMonth
          && (months.map((month) => (
            <button
              key={month}
              type="button"
              className="year-btn"
              onClick={handleMonthClick}
            >
              {month}
            </button>
          )))
        }
      </div>
      <button
        type="button"
        className="today-btn"
        onClick={handleTodayBtn}
      >
        Today
      </button>
    </div>
  );
};

DatePicker.propTypes = {
  showMonth: PropTypes.bool.isRequired,
  showYear: PropTypes.bool.isRequired,
  setShowYear: PropTypes.func.isRequired,
  setShowMonth: PropTypes.func.isRequired,
  selectDate: PropTypes.oneOfType(Date).isRequired,
  setSelectDate: PropTypes.func.isRequired,
};

export default DatePicker;

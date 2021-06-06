import moment from 'moment';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/DatePicker.css';

const DatePicker = ({
  showMonth, setShowMonth, showYear, setShowYear,
}) => {
  const [firstYear, setFirstYear] = useState(2020);
  const months = moment.monthsShort();
  const years = [];
  for (let i = firstYear; i < firstYear + 12; i += 1) {
    years.push(i);
  }
  const handleYearPanel = () => {
    console.log(setFirstYear);
    setShowMonth(!showMonth);
    setShowYear(!showYear);
  };
    // if (i === firstYear + 12) {
  //   setFirstYear(i);
  // }
  return (
    <div className="date-picker-section">
      <div className="select-nav-container">
        <button
          type="button"
          onClick={handleYearPanel}
          className="year-selector"
        >
          select
        </button>
        <button type="button" className="year-nav">
          -
        </button>
        <button type="button" className="year-nav">
          +
        </button>
      </div>
      <div className="year-container">
        {
          showMonth
          && (months.map((month) => (
            <button
              key={month}
              type="button"
              className="year-btn"
            >
              {month}
            </button>
          )))
        }
      </div>
      <div className="month-container">
        {
          showYear
          && (years.map((year) => (
            <button
              key={year}
              type="button"
              className="month-btn"
            >
              {year}
            </button>
          )))
        }
      </div>
      <button
        type="button"
        className="today-btn"
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
};

export default DatePicker;

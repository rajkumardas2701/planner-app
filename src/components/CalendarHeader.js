import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import '../styles/CalendarHeader.css';

const CalendarHeader = ({ selectDate, setSelectDate }) => {
  // const date = moment(selectDate).date();
  const month = moment(selectDate).month();
  const year = moment(selectDate).year();

  const prevMonth = () => {
    // const month = moment(selectDate).month();
    // const year = moment(selectDate).year();
    if (month === 0) {
      setSelectDate(moment(`1-12-${year - 1}`, 'DD-MM-YYYY'));
    } else {
      const newMonth = month - 1;
      setSelectDate(moment(`1-${newMonth + 1}-${year}`, 'DD-MM-YYYY'));
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setSelectDate(moment(`1-01-${year + 1}`, 'DD-MM-YYYY'));
    } else {
      const newMonth = month + 1;
      setSelectDate(moment(`1-${newMonth + 1}-${year}`, 'DD-MM-YYYY'));
    }
  };
  return (
    <div className="calendar-header">
      <div className="left-container">
        <button type="button" onClick={prevMonth}>
          {'<'}
        </button>
        <button type="button" onClick={nextMonth}>
          {'>'}
        </button>
        <p>
          {moment(selectDate).format('MMMM')}
          {' '}
          {moment(selectDate).year()}
        </p>
      </div>
      <div className="right-container">
        <button type="button">
          Week
        </button>
        <button type="button">
          Month
        </button>
      </div>
      {/* {console.log('selectDate', selectDate)}
      {console.log('month', moment(selectDate).month())}
      {console.log('SetselectDate', setSelectDate)} */}

    </div>
  );
};

CalendarHeader.propTypes = {
  selectDate: PropTypes.instanceOf(Date).isRequired,
  setSelectDate: PropTypes.func.isRequired,
};

export default CalendarHeader;

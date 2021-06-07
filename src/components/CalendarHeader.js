import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import '../styles/CalendarHeader.css';
import DatePicker from './DatePicker';

const CalendarHeader = ({
  selectDate, setSelectDate, calendarView, setCalendarView,
}) => {
  const [showSelector, setShowSelector] = useState(false);
  const [showMonth, setShowMonth] = useState(false);
  const [showYear, setShowYear] = useState(false);
  // const date = moment(selectDate).date();
  const month = moment(selectDate).month();
  const year = moment(selectDate).year();

  const prevMonth = () => {
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
  const handleDatePicker = () => {
    setShowSelector(!showSelector);
    setShowMonth(!showMonth);
  };
  const handleWeekView = (e) => {
    e.preventDefault();
    setCalendarView('week');
  };
  const handleMonthView = (e) => {
    e.preventDefault();
    setCalendarView('month');
  };
  return (
    <div className="calendar-header">
      {
        (calendarView === 'month')
          ? (
            <div className="left-container-month-view">
              <button type="button" onClick={prevMonth}>
                {'<'}
              </button>
              <button type="button" onClick={nextMonth}>
                {'>'}
              </button>
              <div className="date-selector">
                <button
                  type="button"
                  onClick={handleDatePicker}
                >
                  {moment(selectDate).format('MMMM')}
                  {' '}
                  {moment(selectDate).year()}
                  {' '}
                  {'>'}
                </button>
              </div>
            </div>
          )
          : (
            <div className="left-container-month-view">
              <button type="button" onClick={prevMonth}>
                {'<'}
              </button>
              <button type="button" onClick={nextMonth}>
                {'>'}
              </button>
              <div className="date-selector">
                <button
                  type="button"
                  onClick={handleDatePicker}
                >
                  {moment(selectDate).format('MMMM')}
                  {' '}
                  {moment(selectDate).year()}
                  {' '}
                  {'>'}
                </button>
              </div>
            </div>
          )
      }
      <div className="right-container">
        <button type="button" onClick={handleWeekView}>
          Week
        </button>
        <button type="button" onClick={handleMonthView}>
          Month
        </button>
      </div>
      {/* {console.log('selectDate', selectDate)}
      {console.log('month', moment(selectDate).month())}
      {console.log('SetselectDate', setSelectDate)} */}
      {
        showSelector
         && (
         <DatePicker
           showMonth={showMonth}
           setShowMonth={setShowMonth}
           showYear={showYear}
           setShowYear={setShowYear}
           selectDate={selectDate}
           setSelectDate={setSelectDate}
         />
         )
      }
    </div>
  );
};

CalendarHeader.propTypes = {
  selectDate: PropTypes.instanceOf(Date).isRequired,
  setSelectDate: PropTypes.func.isRequired,
  setCalendarView: PropTypes.func.isRequired,
  calendarView: PropTypes.string.isRequired,
};

export default CalendarHeader;

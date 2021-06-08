import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import arrOfEvents from '../helper/arrOfEvents';
import '../styles/CalendarApp.css';
// import { getDatesInMonthDisplay } from '../helper/calendarHelper';
import CalendarHeader from './CalendarHeader';
import WeekdayIndicator from './WeekdayIndicator';
import DateIndicator from './DateIndicator';
import WeekIndicator from './WeekIndicator';

const CalendarApp = ({ allTasks }) => {
  const [selectDate, setSelectDate] = useState(moment().toDate());
  const [calendarView, setCalendarView] = useState('month');
  // console.log(setSelectDate);
  const events = arrOfEvents(allTasks);
  return (
    <div>
      {console.log('All calendarEvents in Calendar App', allTasks)}
      {/* {console.log('SelectDate in CalendarApp', selectDate)} */}
      {/* {console.log('Days in Month', getDaysInMonth(6, 2021))}
      {console.log('firstday in Month', getFirstWeekdayOfMonth(6, 2021))} */}
      {console.log('arr of events', events)}
      <CalendarHeader
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        setCalendarView={setCalendarView}
        calendarView={calendarView}
      />
      <table className="calendar-table">
        <tbody className="calendar-body">
          <WeekdayIndicator />
          {
            calendarView === 'month' ? (
              <DateIndicator
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                events={events}
              />
            ) : (
              <WeekIndicator
                selectDate={selectDate}
                setSelectDate={setSelectDate}
              />
            )
          }

        </tbody>
      </table>
    </div>
  );
};

CalendarApp.propTypes = {
  // groupBy: PropTypes.string.isRequired,
  // setParentTask: PropTypes.func.isRequired,
  allTasks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default CalendarApp;

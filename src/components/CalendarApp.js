import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
// import arrOfEvents from '../helper/arrOfEvents';
// import '../../node_modules/react-big-calendar/lib/sass/styles.scss';
import '../styles/CalendarApp.css';
import getDatesInMonthDisplay from '../helper/calendarHelper';
import CalendarHeader from './CalendarHeader';
import WeekdayIndicator from './CalendarWeekdays';
import DateIndicator from './DateIndicator';

// const localizer = momentLocalizer(moment);

const CalendarApp = ({ allTasks }) => {
  const [selectDate, setSelectDate] = useState(moment().toDate());
  // console.log(setSelectDate);
  const days = getDatesInMonthDisplay(6, 2021);
  return (
    <div>
      {console.log('All calendarEvents in Calendar App', allTasks)}
      {/* {console.log('Days in Month', getDaysInMonth(6, 2021))}
      {console.log('firstday in Month', getFirstWeekdayOfMonth(6, 2021))} */}
      {console.log('days in Month', days)}
      <CalendarHeader selectDate={selectDate} />
      <table className="calendar-table">
        <tbody>
          <WeekdayIndicator />
          <DateIndicator
            selectDate={selectDate}
            setSelectDate={setSelectDate}
          />
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

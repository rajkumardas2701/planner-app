import React from 'react';
// , { useState, useEffect }
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import PropTypes from 'prop-types';
import arrOfEvents from '../helper/arrOfEvents';
import '../../node_modules/react-big-calendar/lib/sass/styles.scss';

const localizer = momentLocalizer(moment);

const CalendarApp = ({ allTasks }) => {
  const events = arrOfEvents(allTasks);
  // const [calendarEvents, setCalendarEvents] = useState(events);
  // useEffect(() => {
  //   events = arrOfEvents(allTasks);
  //   setCalendarEvents(events);
  // }, [allTasks]);
  return (
    <div>
      {console.log('All calendarEvents in Calendar App', events)}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 1100 }}
      />
    </div>
  );
};

CalendarApp.propTypes = {
  // groupBy: PropTypes.string.isRequired,
  // setParentTask: PropTypes.func.isRequired,
  allTasks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default CalendarApp;

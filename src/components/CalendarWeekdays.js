import moment from 'moment';

const WeekdayIndicator = () => {
  const weekdays = moment.weekdays();
  return (
    <tr className="header-row">
      {
        weekdays.map((day) => (
          <th
            className="week-day"
            key={day}
          >
            {day}
          </th>
        ))
      }
    </tr>
  );
};

export default WeekdayIndicator;

import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import { enumerateDaysInWeek } from '../helper/calendarHelper';
// import moment from 'moment';
import '../styles/WeekIndicator.css';

const WeekIndicator = ({ selectDate, setSelectDate }) => {
  const dates = enumerateDaysInWeek(selectDate);
  console.log(setSelectDate);
  // console.log(selectDate);
  // console.log('dates', dates);
  return (
    <tr className="week-container">
      {
        dates.map((d) => (
          <td
            key={d}
            className="week-date"
          >
            <div>
              {
                d.format('D')
              }
            </div>
          </td>
        ))
      }

    </tr>
  );
};

WeekIndicator.propTypes = {
  selectDate: PropTypes.instanceOf(Date).isRequired,
  setSelectDate: PropTypes.func.isRequired,
};

export default WeekIndicator;

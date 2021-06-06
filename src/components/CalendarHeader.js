import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const CalendarHeader = ({ selectDate }) => (
  <div className="calendar-header">
    <div className="left-container">
      <p>
        {moment(selectDate).format('MMMM')}
        {' '}
        {moment(selectDate).year()}
      </p>
    </div>
    {/* <div className="right-container">

    </div> */}
  </div>
);

CalendarHeader.propTypes = {
  selectDate: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarHeader;

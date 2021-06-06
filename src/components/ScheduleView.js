import PropTypes from 'prop-types';
import CalendarApp from './CalendarApp';
import '../styles/ScheduleView.css';

const ScheduleView = ({ allTasks }) => (
  <div className="schedule-view">
    <div className="calendar-section">
      <CalendarApp allTasks={allTasks} />
    </div>
    <div className="no-due-section">
      Unnscheduled tasks
    </div>
  </div>
);

ScheduleView.propTypes = {
  // groupBy: PropTypes.string.isRequired,
  // setParentTask: PropTypes.func.isRequired,
  allTasks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default ScheduleView;

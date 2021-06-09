import PropTypes from 'prop-types';
import CalendarApp from './CalendarApp';
import ScheduleNoDues from './ScheduleNoDues';
import '../styles/ScheduleView.css';

const ScheduleView = ({ allTasks, groupBy, setParentTask }) => (
  <div className="schedule-view">
    <div className="calendar-section">
      <CalendarApp allTasks={allTasks} />
    </div>
    <div className="no-due-section">
      <ScheduleNoDues
        allTasks={allTasks}
        groupBy={groupBy}
        setParentTask={setParentTask}
      />
    </div>
  </div>
);

ScheduleView.propTypes = {
  // groupBy: PropTypes.string.isRequired,
  setParentTask: PropTypes.func.isRequired,
  allTasks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  groupBy: PropTypes.string.isRequired,
};

export default ScheduleView;

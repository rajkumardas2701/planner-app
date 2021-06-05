import CalendarApp from './CalendarApp';
import '../styles/ScheduleView.css';

const ScheduleView = () => (
  <div className="schedule-view">
    <div className="calendar-section">
      <CalendarApp />
    </div>
    <div className="no-due-section">
      No due date section
    </div>
  </div>
);

export default ScheduleView;

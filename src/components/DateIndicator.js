import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import AddTask from './AddTask';
import {
  getDayOfMonth,
  getMonth,
  getYear,
} from '../helper/moment-helper';
import { getDatesAndEvents } from '../helper/calendarHelper';
import '../styles/month-row.css';

const DateIndicator = ({ selectDate, events, setParentTask }) => {
  const [showExtraTask, setShowExtraTask] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [dateClicked, setDateClicked] = useState('');
  const datesAndEvents = getDatesAndEvents(
    getMonth(selectDate) + 1,
    getYear(selectDate),
    events,
  );
  const filterEventsOnDay = (events) => {
    const firstTwo = [];
    for (let i = 0; i < 2; i += 1) {
      firstTwo.push(events[i]);
    }
    return firstTwo;
  };
  const handleExtraTask = (e) => {
    e.preventDefault();
    setShowExtraTask(!showExtraTask);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDateClicked(e.target.parentElement.parentElement.parentElement.parentElement.dataset.date);
    // dateClicked = e.target.parentElement.parentElement.parentElement.parentElement.dataset.date;
    setShowForm(!showForm);
  };
  const totalSlots = datesAndEvents.map((i) => (
    <div
      className={`date-icon ${i.class}`}
      key={i.date.toString()}
      data-active-month={i.currentMonth}
      data-date={i.date.toString()}
    >
      <div className="date-container">
        <div className="date-add-icon-container">
          <p className="date-label">
            {getDayOfMonth(i.date)}
          </p>
          <button type="button" className="add-task-in-calendar" onClick={handleClick}>
            <p className="add-task-in-calendar-text">+</p>
          </button>
          {
            showForm
            && (dateClicked === (i.date.toString()))
            && (
              <AddTask
                setParentTask={setParentTask}
                setShowForm={setShowForm}
                dateClicked={dateClicked}
              />
            )
          }
          {/* {console.log('date of month in jsx', (i.date.toString()))}
          {console.log('dateClicked in jsx', (typeof i.date.toString()))} */}
        </div>
        <div className="date-task">
          {
            (i.dayEvents.length <= 2)
              ? (
                <div>
                  {
                    i.dayEvents.map((event) => <p key={event.id} className="each-task">{event.name}</p>)
                  }
                </div>
              )
              : (
                <div>
                  <div className="with-extra-task-container">
                    <div>
                      {
                        filterEventsOnDay(i.dayEvents).map((event) => <p key={event.id} className="each-task">{event.name}</p>)
                      }
                    </div>
                    <div className="extra-btn-section">
                      <button type="button" className="link-to-extra" onClick={handleExtraTask}>
                        +
                        {i.dayEvents.length - 2}
                        {' '}
                        more
                      </button>
                    </div>
                    {
                      showExtraTask
                      && (
                        <div className="list-extra-task">
                          <div className="list-tasks-date-section">
                            <div>{moment(i.dayEvents[0].dueDate).format('MMMM D, YYYY')}</div>
                            <button type="button" onClick={handleExtraTask}>X</button>
                          </div>
                          <div>
                            {
                              i.dayEvents.map((event) => <p key={event.id} className="each-task">{event.name}</p>)
                            }
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
              )
          }
        </div>
      </div>
    </div>
  ));
  const rows = [];
  let cells = [];
  totalSlots.forEach((data, i) => {
    if (((i % 7 !== 0) || (i === 0)) && (i !== 41)) {
      cells.push(data);
    } else if (i === 41) {
      cells.push(data);
      rows.push(cells);
      cells = [];
    } else {
      rows.push(cells);
      cells = [];
      cells.push(data);
    }
  });
  const monthDates = rows.map((d) => <div key={d} className="month-row">{d}</div>);
  return (
    <div>
      {
        monthDates
      }
    </div>
  );
};

DateIndicator.propTypes = {
  selectDate: PropTypes.instanceOf(Date).isRequired,
  setParentTask: PropTypes.func.isRequired,
  // setSelectDate: PropTypes.func.isRequired,
  events: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default DateIndicator;

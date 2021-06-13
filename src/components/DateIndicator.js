import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  getDayOfMonth,
  getMonth,
  getYear,
} from '../helper/moment-helper';
import moment from 'moment';
import { getDatesAndEvents } from '../helper/calendarHelper';
import '../styles/month-row.css';

const DateIndicator = ({ selectDate, events }) => {
  const [showExtraTask, setShowExtraTask] = useState(false);
  const datesAndEvents = getDatesAndEvents(
    getMonth(selectDate) + 1,
    getYear(selectDate),
    events,
  );
  const filterEventsOnDay = (events) => {
    const firstTwo = [];
    console.log('events', events);
    for (let i = 0; i < 2; i += 1) {
      firstTwo.push(events[i]);
    }
    return firstTwo;
  };
  const handleExtraTask = (e) => {
    e.preventDefault();
    setShowExtraTask(!showExtraTask);
  }
  // document.querySelector('div[data-active-month=false]').style
  // console.log(setSelectDate);
  // console.log('dayEvents in DateIndicator', datesAndEvents);
  const totalSlots = datesAndEvents.map((i) => (
    <div
      className={`date-icon ${i.class}`}
      key={i.date.toISOString()}
      data-active-month={i.currentMonth}
      data-date={i.date.toString()}
    >
      <div className="date-container">
        <p className="date-label">
          {getDayOfMonth(i.date)}
        </p>
        <div className="date-task">
          {
            (i.dayEvents.length <= 2)
            ? (<div>
              {
                i.dayEvents.map((event) => <p key={event.id} className="each-task">{event.name}</p>)
              }
            </div>)
            : (
              <div>
                {
                  <div className="with-extra-task-container">
                    <div>
                      {
                        filterEventsOnDay(i.dayEvents).map((event) => <p key={event.id} className="each-task">{event.name}</p>)
                      }
                    </div>
                    <div className="extra-btn-section">
                      {<button type='button' className="link-to-extra" onClick={handleExtraTask}>+{i.dayEvents.length - 2}{' '}more</button>}
                    </div>
                    {
                      showExtraTask &&
                      (
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
                }
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
  // setSelectDate: PropTypes.func.isRequired,
  events: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default DateIndicator;

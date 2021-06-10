import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import '../styles/Task.css';

const Task = ({ todo }) => {
  const fetchClass = (progress) => {
    if (progress === 'Not started') {
      return 'progress-view-not-started';
    } if (progress === 'In progress') {
      return 'progress-view-in-progress';
    }
    return 'progress-view-completed';
  };
  // const handleProgressState = (todo) => {

  // };
  return (
    <div className="task-container">
      <div className="task-title-status">
        <button
          type="button"
          className={fetchClass(todo.progress)}
        >
          .
        </button>
        {
          (todo.progress === 'Completed')
            ? (
              <p className="task-title task-strike">
                {todo.name}
              </p>
            )
            : (
              <p className="task-title">
                {todo.name}
              </p>
            )
        }
      </div>
      <div>
        {
          (todo.toDo && todo.toDo.length > 0)
            ? (<div className="todoTag">{todo.toDo}</div>)
            : (<p className="todoTag">To do</p>)
        }
      </div>
      {
        (todo.dueDate && todo.dueDate.length > 0)
          ? (
            <div className="task-dueDate">
              <i className="far fa-calendar-alt cal-task" />
              <p>{moment(todo.dueDate, 'YYYY-MM-DD').format('MM/DD')}</p>
            </div>
          )
          : ''
        }
      {
          (todo.assign && todo.assign.length > 0)
            ? (
              <div className="task-assigned">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fy7sKAqTLiD5YtPEY84Q9wtV8dDLmoBSeg&usqp=CAU" alt="avator" />
                {
                  (todo.progress === 'Completed')
                    ? (
                      <p>
                        Completed by
                        {todo.assign}
                      </p>
                    )
                    : (<p>{todo.assign}</p>)
                }
              </div>
            )
            : ''
        }
    </div>
  );
};

Task.propTypes = {
  todo: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Task;

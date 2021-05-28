import React from 'react';
import PropTypes from 'prop-types';
import BoardView from '../components/BoardView';
import ScheduleView from '../components/ScheduleView';

const ToDoList = ({ view }) => (
  <div>
    {/* {console.log('view setTask from todoList', view)} */}
    {/* {console.log('view task from todoList', task)} */}
    {
        (view === 'board')
          ? (<BoardView />)
          : (<ScheduleView />)
      }
    {/* <BoardView /> */}
  </div>
);

ToDoList.propTypes = {
  view: PropTypes.string.isRequired,
};

export default ToDoList;

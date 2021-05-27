import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BoardView from '../components/BoardView';
import ScheduleView from '../components/ScheduleView';
import { todos } from '../helper/manageToDos';

const ToDoList = ({ view }) => {
  const [tasks, setToDos] = useState([]);
  useEffect(() => {
    setToDos(todos);
  }, []);
  return (
    <div>
      {/* {console.log('view state from todoList', viewSection)} */}
      {/* {console.log('view state from todoList', view)} */}
      {
          (view === 'board')
            ? (<BoardView tasks={tasks} />)
            : (<ScheduleView tasks={tasks} />)
        }
    </div>
  );
};

ToDoList.propTypes = {
  view: PropTypes.string.isRequired,
};

export default ToDoList;

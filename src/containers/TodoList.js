import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BoardView from '../components/BoardView';
import ScheduleView from '../components/ScheduleView';
import { todos } from '../helper/manageToDos';

const ToDoList = ({ view, groupBy }) => {
  const [parentTask, setParentTask] = useState({});
  const [allTasks, setAllTasks] = useState(todos);
  useEffect(() => {
    // console.log('testing', !Object.keys(parentTask).length === 0);
    if ('id' in parentTask) {
      // console.log('testing', 'id' in parentTask);
      allTasks.push(parentTask);
      setAllTasks(allTasks);
      setParentTask({});
    }
  }, [parentTask]);
  return (
    <div>
      {/* {console.log('groupby in todolist', groupBy)} */}
      {console.log('view Alltask from todoList', allTasks)}
      {console.log('view parentTask from todoList', parentTask)}
      {
          (view === 'board')
            ? (<BoardView allTasks={allTasks} setParentTask={setParentTask} groupBy={groupBy} />)
            : (<ScheduleView />)
        }
      {/* <BoardView /> */}
    </div>
  );
};

ToDoList.propTypes = {
  view: PropTypes.string.isRequired,
  groupBy: PropTypes.string.isRequired,
};

export default ToDoList;

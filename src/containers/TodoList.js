import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BoardView from '../components/BoardView';
import ScheduleView from '../components/ScheduleView';
import { todos } from '../helper/manageToDos';
import { filterTaskHelper, withNoFilter } from '../helper/filterTaskHelper';

const ToDoList = ({ view, groupBy, filters }) => {
  const [parentTask, setParentTask] = useState({});
  const [allTasks, setAllTasks] = useState(todos);
  const [currentFilters, setCurrentFilters] = useState(filters);
  console.log('TODOs Array', todos);
  useEffect(() => {
    if ('id' in parentTask) {
      // allTasks.push(parentTask);
      todos.push(parentTask);
      console.log('inside setParentTask of ToDoList');
      // setAllTasks(allTasks);
      const noFilterTasks = withNoFilter(todos);
      setAllTasks(noFilterTasks);
      setParentTask({});
    }
  }, [parentTask]);
  console.log('TODOs Array', todos);
  useEffect(() => {
    // console.log('inside useeffect of filters in ToDoList');
    setCurrentFilters(filters);
  }, [filters]);
  useEffect(() => {
    // console.log(currentFilters);
    // console.log(allTasks);
    const currentTasks = filterTaskHelper(todos, currentFilters);
    console.log('filtered in todoList', currentTasks);
    setAllTasks(currentTasks);
    // console.log('filtered in todoList', currentTasks);
    setParentTask({});
  }, [currentFilters]);
  return (
    <div>
      {console.log('filters from ToDoList', currentFilters)}
      {console.log('view Alltask from todoList', allTasks)}
      {console.log('view parentTask from todoList', parentTask)}
      {
          (view === 'board')
            ? (<BoardView allTasks={allTasks} setParentTask={setParentTask} groupBy={groupBy} />)
            : (<ScheduleView allTasks={allTasks} groupBy={groupBy} setParentTask={setParentTask} />)
        }
    </div>
  );
};

ToDoList.propTypes = {
  view: PropTypes.string.isRequired,
  groupBy: PropTypes.string.isRequired,
  filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default ToDoList;

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
  useEffect(() => {
    if ('id' in parentTask) {
      todos.push(parentTask);
      console.log('inside setParentTask of ToDoList');
      const noFilterTasks = withNoFilter(todos);
      setAllTasks(noFilterTasks);
      setParentTask({});
    }
  }, [parentTask]);
  useEffect(() => {
    setCurrentFilters(filters);
  }, [filters]);
  useEffect(() => {
    const currentTasks = filterTaskHelper(todos, currentFilters);
    setAllTasks(currentTasks);
    setParentTask({});
  }, [currentFilters]);
  return (
    <div>
      {/* {console.log('filters from ToDoList', currentFilters)}
      {console.log('view Alltask from todoList', allTasks)}
      {console.log('view parentTask from todoList', parentTask)} */}
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

import PropTypes from 'prop-types';
import React from 'react';

const Task = ({ todo }) => (
  <ul>
    <li>
      id
      {todo.id}
    </li>
    <li>
      name
      {todo.name}
    </li>
    <li>
      To do
      {todo.toDo}
    </li>
    <li>
      Due date
      {todo.dueDate}
    </li>
    <li>
      Assign
      {todo.assign}
    </li>
    <li>
      progress
      {todo.progress}
    </li>
    {/* {console.log('from task component', todo)} */}
  </ul>
);

Task.propTypes = {
  todo: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Task;

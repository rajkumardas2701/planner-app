import PropTypes from 'prop-types';

const Task = ({ task }) => (
  <ul key={task.id}>
    <li>
      id
      {task.id}
    </li>
    <li>
      name
      {task.name}
    </li>
    <li>
      To do
      {task.toDo}
    </li>
    <li>
      Due date
      {task.dueDate}
    </li>
    <li>
      Assign
      {task.assign}
    </li>
    <li>
      progress
      {task.progress}
    </li>
  </ul>
);

Task.propTypes = {
  task: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Task;

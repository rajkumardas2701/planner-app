import { useState, useEffect } from 'react';
//
// import PropTypes from 'prop-types';
// import { uuid } from 'uuidv4';
import AddTask from './AddTask';
import { todos } from '../helper/manageToDos';
import Task from './Task';

const BoardView = () => {
  const [showForm, setShowForm] = useState(false);
  const [task, setTask] = useState({});
  useEffect(() => {
    todos.push(task);
    // localStorage.setItem('tasks', todos);
  }, [task]);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <div>
      <h3>Board view</h3>
      {/* {console.log('task from BoardView', task)} */}
      <button type="button" onClick={handleClick}>+ Add Task</button>
      { showForm && <AddTask setTask={setTask} /> }
      <div>
        {/* {console.log('Boardtasks from Board view', todos)} */}
        {
          // (boardTasks[0] !== undefined && boardTasks.length)
          (todos.length > 0 && todos[0] !== undefined)
            ? (
              todos.map((task) => (<Task task={task} key={task.id} />))
            )
            : (<li>Nothing to display</li>)
        }
      </div>
    </div>
  );
};

// BoardView.propTypes = {
//   // todos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//   // setTask: PropTypes.func,
//   // boardTasks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
// };

// BoardView.defaultProps = {
//   // todos: [],
//   // setTask: () => {},
//   // boardTasks: [],
// };

export default BoardView;

import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuidv4';
import '../styles/AddTask.css';
import PropTypes from 'prop-types';

const AddTask = ({ setTask }) => {
  const [taskform, setTaskForm] = useState({});
  // const {
  //   name, toDo, dueDate, assign, progress,
  // } = taskform;
  const taskSubmit = (e) => {
    const task = {
      id: Date.now(),
      name: taskform.name,
      toDo: taskform.toDo,
      dueDate: taskform.dueDate,
      assign: taskform.assign,
      progress: 'Not Started',
    };
    setTask(task);
    e.preventDefault();
  };

  const handleChange = ({ target: { name, value } }) => {
    setTaskForm({ ...taskform, [name]: value });
  };
  return (
    <div>
      {/* {console.log('addTask form details', taskform)} */}
      {/* {console.log('set task from AddTask view', setTask)} */}
      <form onSubmit={taskSubmit} className="add-task-form">
        <input
          placeholder="Enter a task name"
          name="name"
          type="text"
          value={taskform.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="To do"
          name="toDo"
          type="text"
          value={taskform.toDo}
          onChange={handleChange}
        />
        <input
          placeholder="Set due date"
          name="dueDate"
          type="date"
          value={taskform.dueDate}
          onChange={handleChange}
        />
        <input
          placeholder="Assign"
          name="assign"
          type="text"
          value={taskform.assign}
          onChange={handleChange}
        />
        <button type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

AddTask.propTypes = {
  setTask: PropTypes.func,
};

AddTask.defaultProps = {
  setTask: () => {},
};

export default AddTask;

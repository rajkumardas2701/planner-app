import { useState } from 'react';
import '../styles/AddTask.css';
import PropTypes from 'prop-types';

const AddTask = ({ setParentTask, setShowForm }) => {
  const [taskform, setTaskForm] = useState({
    id: '',
    name: '',
    toDo: '',
    dueDate: '',
    assign: '',
    progress: '',
  });
  const {
    id, name, toDo, dueDate, assign, progress,
  } = taskform;
  const resetForm = () => {
    setTaskForm({
      id: '',
      name: '',
      toDo: '',
      dueDate: '',
      assign: '',
      progress: '',
    });
  };
  const taskSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      name,
      toDo,
      dueDate,
      assign,
      progress: 'Not Started',
    };
    setParentTask(task);
    resetForm();
    setShowForm(false);
  };
  const handleChange = ({ target: { name, value } }) => {
    setTaskForm({ ...taskform, [name]: value });
  };
  return (
    <div>
      {console.log('addTask form details', taskform)}
      {/* {console.log('set task from AddTask view', setTask)} */}
      <form onSubmit={taskSubmit} className="add-task-form">
        <div
          name="id"
          type="text"
          value={id}
        />
        <div
          name="progress"
          type="text"
          value={progress}
        />
        <input
          placeholder="Enter a task name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="To do"
          name="toDo"
          type="text"
          value={toDo}
          onChange={handleChange}
        />
        <input
          placeholder="Set due date"
          name="dueDate"
          type="date"
          value={dueDate}
          onChange={handleChange}
        />
        <input
          placeholder="Assign"
          name="assign"
          type="text"
          value={assign}
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
  setParentTask: PropTypes.func.isRequired,
  setShowForm: PropTypes.func.isRequired,
};

// AddTask.defaultProps = {
//   setTask: () => {},
// };

export default AddTask;

import React, { useState } from 'react';
import '../styles/AddTask.css';
import PropTypes from 'prop-types';
import moment from 'moment';

const AddTask = ({ setParentTask, setShowForm, status, dateClicked }) => {
    console.log('Inside addtask', moment(dateClicked).format('YYYY-MM-DD'));
  // }
  const [taskform, setTaskForm] = useState({
    id: '',
    name: '',
    toDo: '',
    dueDate: moment(dateClicked).format('YYYY-MM-DD'),
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
      dueDate: moment(dateClicked).format('MM/DD/YYYY'),
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
      progress: status,
    };
    setParentTask(task);
    resetForm();
    setShowForm(false);
  };
  const handleChange = ({ target: { name, value } }) => {
    setTaskForm({ ...taskform, [name]: value });
  };
  // window.onclick = (e) => {
  //   console.log(e.target.className);
  //   e.preventDefault();
  //   if ((e.target.className !== 'add-task-form') || (e.target.className !== 'progress-each') || (
  //     e.target.className !== 'progress-btns'
  //   )) {
  //     setShowForm(false);
  //   }
  // };
  return (
    <div className="form-task-container">
      {/* {console.log('addTask form details', taskform)} */}
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
        {console.log('Due date inside JSX of Add Task', dueDate)}
        <input
          placeholder="Assign"
          name="assign"
          type="text"
          value={assign}
          onChange={handleChange}
        />
        <button type="submit" className="task-submit-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

AddTask.propTypes = {
  setParentTask: PropTypes.func.isRequired,
  setShowForm: PropTypes.func.isRequired,
  status: PropTypes.string,
  dateClicked: PropTypes.instanceOf(Date),
};

AddTask.defaultProps = {
  status: 'Not started',
  dateClicked: '',
};

export default AddTask;

import { useState } from 'react';
import { uuid } from 'uuidv4';
import '../styles/AddTask.css';
import { addToDo } from '../helper/manageToDos';

const AddTask = () => {
  const [taskform, setTaskForm] = useState({
    id: '',
    name: '',
    toDo: 'To do',
    dueDate: '',
    assign: '',
    progress: '',
  });
  const taskSubmit = () => {
    const task = {
      id: uuid(),
      name: taskform.name,
      toDo: taskform.toDo,
      dueDate: taskform.dueDate,
      assign: taskform.assign,
      progress: 'Not Started',
    };
    addToDo(task);
  };

  const handleChange = ({ target: { name, value } }) => {
    setTaskForm({ ...taskform, [name]: value });
  };
  return (
    <div>
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
        <button type="button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;

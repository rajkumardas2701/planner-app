import { useState } from 'react';

const AddTask = () => {
  const [taskform, setTaskForm] = useState({
    id: 0,
    name: '',
    toDo: 'To do',
    dueDate: '',
    assign: '',
    progress: '',
  });
  const taskSubmit = () => {

  };

  const handleChange = ({ target: { name, value } }) => {
    setTaskForm({ ...taskform, [name]: value });
  };
  return (
    <div>
      <form onSubmit={taskSubmit}>
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

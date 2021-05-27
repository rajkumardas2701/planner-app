import { useState } from 'react';
import AddTask from './AddTask';

const BoardView = () => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <h3>Board view</h3>
      <button type="button" onClick={handleClick}>Add Task</button>
      { showForm && <AddTask />}
    </div>
  );
};

export default BoardView;

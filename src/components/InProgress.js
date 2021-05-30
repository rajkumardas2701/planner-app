import { useState } from 'react';

const InProgress = () => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <div>
      <h4 className="progress-title">In progress</h4>
      <button type="button" onClick={handleClick} className="progress-btns">+ Add Task</button>
    </div>
  );
};
export default InProgress;

// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import AddTask from './AddTask';
// import Task from './Task';
import ProgressView from './ProgressView';
import DueDateView from './DueDateView';

const BoardView = ({ allTasks, setParentTask, groupBy }) => {
  // const [showForm, setShowForm] = useState(false);
  // const [currentToDos, setCurrentToDos] = useState(allTasks);
  // useEffect(() => {
  //   setCurrentToDos(currentToDos);
  console.log('inside use effect of boardview');
  // }, [allTasks]);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setShowForm(!showForm);
  // };
  // setCurrentToDos(allTasks);
  return (
    <div>
      <h3>Board view</h3>
      {console.log('Alltask from BoardView', allTasks)}
      {/* {console.log('groupBy from BoardView', groupBy)} */}
      {/* <button type="button" onClick={handleClick}>+ Add Task</button> */}
      {/* { showForm && <AddTask setParentTask={setParentTask} setShowForm={setShowForm} /> } */}
      <div>
        {/* {console.log('Board currentToDos from Board view', currentToDos)}
        {console.log('Board currentToDos length from Board view', currentToDos.length)} */}
        <div>
          {
            (groupBy === 'Progress')
              ? (
                <ProgressView setParentTask={setParentTask} currentToDos={allTasks} />
              )
              : (
                <DueDateView setParentTask={setParentTask} currentToDos={allTasks} />
              )
          }
        </div>
      </div>
    </div>
  );
};

BoardView.propTypes = {
  groupBy: PropTypes.string.isRequired,
  setParentTask: PropTypes.func.isRequired,
  allTasks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

// BoardView.defaultProps = {
//   // todos: [],
//   // setTask: () => {},
//   // boardTasks: [],
// };

export default BoardView;

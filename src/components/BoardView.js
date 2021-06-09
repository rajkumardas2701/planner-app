import React from 'react';
import PropTypes from 'prop-types';
import ProgressView from './ProgressView';
import DueDateView from './DueDateView';
import '../styles/BoardView.css';

const BoardView = ({ allTasks, setParentTask, groupBy }) => {
  const classN = 'progress-view-container';
  return (
    <div className="board-view-container">
      {
          (groupBy === 'Progress')
            ? (
              <ProgressView
                setParentTask={setParentTask}
                currentToDos={allTasks}
                classN={classN}
              />
            )
            : (
              <DueDateView setParentTask={setParentTask} currentToDos={allTasks} />
            )
        }
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

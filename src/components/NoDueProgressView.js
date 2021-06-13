import PropTypes from 'prop-types';
import React from 'react';
import ProgressView from './ProgressView';
import filterProgressViewWithNoDueDate from '../helper/filterProgressViewWithNoDueDate';

const NoDueProgressView = ({ allTasks }) => {
  const classN = 'progress-view-noDues';
  const currentToDos = filterProgressViewWithNoDueDate(allTasks);
  return (
    <div>
      <ProgressView classN={classN} currentToDos={currentToDos} />
    </div>
  );
};

NoDueProgressView.propTypes = {
  allTasks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default NoDueProgressView;

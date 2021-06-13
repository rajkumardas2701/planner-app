import PropTypes from 'prop-types';
import React from 'react';
import filterProgressViewWithNoDueDate from '../helper/filterProgressViewWithNoDueDate';
import Completed from './Completed';
import NoDueDateView from './NoDueDateView';

const NoDueAndDueDateView = ({ allTasks }) => {
  const filtered = filterProgressViewWithNoDueDate(allTasks);
  const completedTodos = filtered[1].Completed;
  const classN = 'progress-view-noDues';
  const noDueDate = allTasks[0]['No Date'];
  const classM = 'due-date-each-schedule';
  return (
    <div>
      {
        (noDueDate && noDueDate.length > 0)
          ? (
            <NoDueDateView
              noDueDate={noDueDate}
              classN={classN}
              classM={classM}
            />
          )
          : ''
      }
      <Completed
        completedTodos={completedTodos}
        classN={classN}
      />
    </div>
  );
};

NoDueAndDueDateView.propTypes = {
  allTasks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default NoDueAndDueDateView;

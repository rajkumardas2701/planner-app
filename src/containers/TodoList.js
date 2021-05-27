import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BoardView from '../components/BoardView';
import ScheduleView from '../components/ScheduleView';

const ToDoList = ({ view }) => {
  const [viewSection, setViewSection] = useState(view);
  useEffect(() => {
    setViewSection(viewSection);
  }, [viewSection]);

  return (
    <div>
      {
        (viewSection === 'board')
          ? (<BoardView />)
          : (<ScheduleView />)
      }
    </div>
  );
};

ToDoList.propTypes = {
  view: PropTypes.string.isRequired,
};

export default ToDoList;

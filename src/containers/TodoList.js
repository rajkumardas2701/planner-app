import React from 'react';
// , { useState, useEffect }
import PropTypes from 'prop-types';
import BoardView from '../components/BoardView';
import ScheduleView from '../components/ScheduleView';

const ToDoList = ({ view }) => (
  <div>
    {/* {console.log('view state from todoList', viewSection)} */}
    {/* {console.log('view state from todoList', view)} */}
    {
          (view === 'board')
            ? (<BoardView />)
            : (<ScheduleView />)
        }
  </div>
);
// };

ToDoList.propTypes = {
  view: PropTypes.string.isRequired,
};

export default ToDoList;
// {
// const [viewSection, setViewSection] = useState(view);
// useEffect(() => {
//   setViewSection(viewSection);
// }, []);
// return

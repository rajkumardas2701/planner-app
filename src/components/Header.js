import '../styles/Header.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { GROUPS, FILTERS } from '../constants/initialState';

const Header = ({ setView, setGroupBy }) => {
  // set section is to highlight the selection board or schedule
  const [section, setSection] = useState('board');
  const [showFilters, setShowFilters] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showDue, setShowDue] = useState(false);
  useEffect(() => {
    setSection(section);
  }, [section]);
  const handleFilterClick = (e) => {
    setShowFilters(!showFilters);
    e.preventDefault();
  };
  const handleBoardChange = (e) => {
    e.preventDefault();
    setView('board');
    setSection('board');
  };
  const handleScheduleChange = (e) => {
    e.preventDefault();
    setView('schedule');
    setSection('schedule');
  };
  const handleGroupChange = (e) => {
    // e.preventDefault();
    setGroupBy(e.target.value);
  };
  const handleProgressList = (e) => {
    e.preventDefault();
    setShowProgress(!showProgress);
  };
  const handleDueList = (e) => {
    e.preventDefault();
    setShowDue(!showDue);
  };
  // window.onclick = (e) => {
  //   // console.log(e.target.className);
  //   e.preventDefault();
  //   if (e.target.className !== 'filter-btn') {
  //     setShowFilters(false);
  //   }
  // };
  return (
    <div className="header-container">
      <div className="image-task">
        <div className="image">
          <p>Image</p>
        </div>
        <div className="title-text">
          <p className="main-title">My Task</p>
          <p>My Task</p>
        </div>
      </div>
      <div className="view-section">
        <button type="button" onClick={handleBoardChange}>Board</button>
        <button type="button" onClick={handleScheduleChange}>Schedule</button>
      </div>
      <div className="user-details">
        <p>Image</p>
        <p>Name</p>
      </div>
      <div className="categories-section">
        <button type="button" onClick={handleFilterClick} className="filter-btn">
          Filter ()
        </button>
        {
            showFilters
            && (
            <div className="filter-container">
              <button type="button" className="filter-title filter-btn" onClick={handleProgressList}>
                Progress
              </button>
              {
                showProgress
                 && (
                 <div className="progress-filters">
                   {
                    FILTERS[1].map((progress) => <button type="button" key={progress} className="filter-btn">{progress}</button>)
                  }
                 </div>
                 )
              }
              <button type="button" className="filter-title filter-btn" onClick={handleDueList}>
                Due
              </button>
              {
                showDue
                && (
                  <div className="due-filters">
                    {
                    FILTERS[0].map((due) => <button type="button" key={due} className="filter-btn">{due}</button>)
                  }
                  </div>
                )
              }

            </div>
            )
          }
        <p>
          Group by
          <select onChange={handleGroupChange}>
            {
              GROUPS.map((group) => <option key={group} value={group}>{group}</option>)
            }
          </select>
        </p>
      </div>
    </div>
  );
};

Header.propTypes = {
  setView: PropTypes.func,
  setGroupBy: PropTypes.func.isRequired,
};

Header.defaultProps = {
  setView: () => {},
};

export default Header;

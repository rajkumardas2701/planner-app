import '../styles/Header.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { GROUPS, FILTERS } from '../constants/initialState';

const Header = ({ setView, setGroupBy }) => {
  // set section is to highlight the selection board or schedule
  const [section, setSection] = useState('board');
  const [showFilters, setShowFilters] = useState(false);
  useEffect(() => {
    setSection(section);
  }, [section]);
  const handleFilterClick = () => {
    setShowFilters(!showFilters);
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
          {
            showFilters
            && (
            <span className="filter-dropdown">
              <select multiple className="filter-select">
                <optgroup label="Progress">
                  {
                FILTERS[1].map((progress) => (
                  <option
                    value={progress}
                    key={progress}
                  >
                    {progress}
                  </option>
                ))
              }
                </optgroup>
                <optgroup label="Due">
                  {
                FILTERS[0].map((due) => (
                  <option
                    value={due}
                    key={due}
                  >
                    {due}
                  </option>
                ))
              }
                </optgroup>
              </select>
            </span>
            )
          }
        </button>
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

import '../styles/Header.css';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { GROUPS, FILTERS } from '../constants/initialState';

const Header = (
  {
    setView, setGroupBy, setFilters, filters,
  },
) => {
  const [section, setSection] = useState('board');
  const [showFilters, setShowFilters] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showDue, setShowDue] = useState(false);
  const [filterCount, setFilterCount] = useState(0);
  useEffect(() => {
    setSection(section);
  }, [section]);
  // let filterCount = 0;
  const countTrueObj = (items) => {
    console.log('filters in counttrueObj', items);
    const count = Object.values(items).filter((item) => item === true).length;
    return count;
  };
  const handleFilterClick = (e) => {
    setShowFilters(!showFilters);
    e.preventDefault();
  };
  const handleBoardChange = (e) => {
    e.preventDefault();
    setView('board');
    setSection('board');
    const element = document.getElementById('board-button');
    element.classList.add('board-schedule-click');
    const btnelement = document.getElementById('schedule-button');
    btnelement.classList.remove('board-schedule-click');
  };
  const handleScheduleChange = (e) => {
    e.preventDefault();
    setView('schedule');
    setSection('schedule');
    const element = document.getElementById('schedule-button');
    element.classList.add('board-schedule-click');
    const btnelement = document.getElementById('board-button');
    btnelement.classList.remove('board-schedule-click');
  };
  const handleGroupChange = (e) => {
    setGroupBy(e.target.value);
  };
  const handleProgressList = (e) => {
    e.preventDefault();
    setShowProgress(!showProgress);
    const element = document.getElementById('fa-angle-down');
    if (document.getElementsByClassName('angle-down-reverse').length > 0) {
      element.classList.remove('angle-down-reverse');
    } else {
      element.classList.add('angle-down-reverse');
    }
  };
  const handleDueList = (e) => {
    e.preventDefault();
    setShowDue(!showDue);
    const element = document.getElementById('fa-angle-down-due');
    if (document.getElementsByClassName('angle-down-reverse-due').length > 0) {
      element.classList.remove('angle-down-reverse-due');
    } else {
      element.classList.add('angle-down-reverse-due');
    }
  };
  // window.onclick = (e) => {
  //   // console.log(e.target.className);
  //   e.preventDefault();
  //   if (e.target.className !== 'filter-btn') {
  //     setShowFilters(false);
  //   }
  // };
  // console.log(setFilter);
  const pickFilter = ({ target: { textContent } }) => {
    if (filters[textContent] === false) {
      setFilters({ ...filters, [textContent]: true });
    } else {
      setFilters({ ...filters, [textContent]: false });
    }
  };
  useEffect(() => {
    setFilterCount(countTrueObj(filters));
  }, [filters]);
  return (
    <div className="header-container">
      {console.log('filters from Header', filters)}
      <div className="image-task">
        <div className="image">
          <p>MP</p>
        </div>
        <div className="title-text">
          <p className="main-title">Mini Project</p>
          <p className="sub-title">Mini Project</p>
        </div>
      </div>
      <div className="view-section">
        <button type="button" onClick={handleBoardChange} className="board-button board-schedule-click" id="board-button">Board</button>
        <button type="button" onClick={handleScheduleChange} className="schedule-button" id="schedule-button">Schedule</button>
      </div>
      <div className="header-right-section">
        <div className="user-details">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fy7sKAqTLiD5YtPEY84Q9wtV8dDLmoBSeg&usqp=CAU" alt="avator" />
          <p>Rajkumar Das</p>
        </div>
        <div className="categories-section">
          <button type="button" onClick={handleFilterClick} className="filter-btn-main">
            <p>
              Filter (
              {filterCount}
              )
            </p>
            <i className="fas fa-angle-down filter-icon" />
          </button>
          {
              showFilters
              && (
              <div className="filter-container">
                <button type="button" className="filter-title filter-btn" onClick={handleProgressList}>
                  <p>Progress</p>
                  <div><i className="fas fa-angle-down" id="fa-angle-down" /></div>
                </button>
                {
                  showProgress
                  && (
                  <div className="progress-filters">
                    {
                      FILTERS[1].map((progress) => (
                        <button type="button" role="checkbox" aria-checked onClick={pickFilter} key={progress} className="filter-btn btn-check filter-style">
                          <div>
                            {progress}
                          </div>
                          {(filters[progress] && <div><i className="fas fa-check icon-style" /></div>)}
                        </button>
                      ))
                    }
                  </div>
                  )
                }
                <button type="button" className="filter-title filter-btn" onClick={handleDueList}>
                  <p>Due</p>
                  <div><i className="fas fa-angle-down" id="fa-angle-down-due" /></div>
                </button>
                {
                  showDue
                  && (
                    <div className="due-filters">
                      {
                      FILTERS[0].map((due) => (
                        <button type="button" onClick={pickFilter} key={due} className="filter-btn btn-check filter-style">
                          <div>{due}</div>
                          {filters[due] && <div><i className="fas fa-check icon-style" /></div>}
                        </button>
                      ))
                    }
                    </div>
                  )
                }

              </div>
              )
            }
          <p>
            Group by
            <select onChange={handleGroupChange} className="groupby-dropdown">
              {
                GROUPS.map((group) => <option key={group} value={group}>{group}</option>)
              }
            </select>
          </p>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  setView: PropTypes.func,
  setGroupBy: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

Header.defaultProps = {
  setView: () => {},
};

export default Header;

import '../styles/Header.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Header = ({ setView }) => {
  const [section, setSection] = useState('board');
  useEffect(() => {
    setSection(section);
  }, [section]);
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
        <p>Filter</p>
        <p>Group by</p>
      </div>
    </div>
  );
};

Header.propTypes = {
  setView: PropTypes.func,
};

Header.defaultProps = {
  setView: () => {},
};

export default Header;

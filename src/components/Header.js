import '../styles/Header.css';

const Header = () => (
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
      <p>Board</p>
      <p>Schedule</p>
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

export default Header;

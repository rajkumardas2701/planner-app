import '../styles/ProgressView.css';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import NotStarted from './NotStarted';
import InProgress from './InProgress';
import Completed from './Completed';

const ProgressView = ({ setParentTask }) => (
  <div className="progress-view-container">
    <div className="progress-each">
      <NotStarted setParentTask={setParentTask} />
    </div>
    <div className="progress-each">
      <InProgress setParentTask={setParentTask} />
    </div>
    <div className="progress-each">
      <Completed setParentTask={setParentTask} />
    </div>
  </div>
);

ProgressView.propTypes = {
  setParentTask: PropTypes.func.isRequired,
};

export default ProgressView;

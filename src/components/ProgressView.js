import '../styles/ProgressView.css';
// import { useState } from 'react';
import NotStarted from './NotStarted';
import InProgress from './InProgress';
import Completed from './Completed';

const ProgressView = () => (
  <div className="progress-view-container">
    <div className="progress-each">
      <NotStarted />
    </div>
    <div className="progress-each">
      <InProgress />
    </div>
    <div className="progress-each">
      <Completed />
    </div>
  </div>
);

export default ProgressView;

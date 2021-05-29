import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import ToDoList from '../containers/TodoList';
import Header from './Header';
import NavBar from '../layouts/NavBar';

const App = () => {
  const [view, setView] = useState('board');
  const [groupBy, setGroupBy] = useState('Progress');
  useEffect(() => {
    setView(view);
  }, [view]);
  useEffect(() => {
    setGroupBy(groupBy);
  }, [groupBy]);
  return (
    <div className="App">
      {/* {console.log('view state from App', view)} */}
      <NavBar />
      <Header setView={setView} setGroupBy={setGroupBy} />
      <ToDoList view={view} groupBy={groupBy} />
    </div>
  );
};

export default App;

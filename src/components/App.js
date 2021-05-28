import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import ToDoList from '../containers/TodoList';
import Header from './Header';
import NavBar from '../layouts/NavBar';

const App = () => {
  const [view, setView] = useState('board');
  useEffect(() => {
    setView(view);
  }, [view]);
  return (
    <div className="App">
      {/* {console.log('view state from App', view)} */}
      <NavBar />
      <Header setView={setView} />
      <ToDoList view={view} />
    </div>
  );
};

export default App;

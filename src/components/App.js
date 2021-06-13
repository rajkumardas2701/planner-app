import React, { useState, useEffect } from 'react';
// import '../styles/App.css';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import ToDoList from '../containers/TodoList';
import Header from './Header';
import NavBar from '../layouts/NavBar';

const App = () => {
  initializeIcons();
  const [view, setView] = useState('board');
  const [groupBy, setGroupBy] = useState('Progress');
  const [filters, setFilters] = useState({
    Late: false,
    Today: false,
    Tomorrow: false,
    'This Week': false,
    'Next Week': false,
    Future: false,
    'No date': false,
    'Not started': false,
    'In progress': false,
    Completed: false,
  });
  useEffect(() => {
    setView(view);
  }, [view]);
  return (
    <div className="App">
      {/* {console.log('view filters from App', filters)} */}
      <NavBar />
      <Header
        setView={setView}
        setGroupBy={setGroupBy}
        setFilters={setFilters}
        filters={filters}
      />
      <ToDoList view={view} groupBy={groupBy} filters={filters} />
    </div>
  );
};

export default App;

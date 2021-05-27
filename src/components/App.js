import '../styles/App.css';
import ToDoList from '../containers/TodoList';
import Header from './Header';
import NavBar from '../layouts/NavBar';

const App = () => (
  <div className="App">
    <NavBar />
    <Header />
    <ToDoList />
  </div>
);

export default App;

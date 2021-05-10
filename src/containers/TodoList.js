import React, { useEffect } from 'react';
import initialTodos from '../constants/initialState';
import '../styles/ToDoList.css';
import {
  notStarted, inProgress, completed, categorizeToDos,
} from '../constants/categorizeToDos';

const ToDoList = () => {
  // const [todoList, setTodolist] = useState(initialTodos);

  useEffect(() => {
    categorizeToDos(initialTodos);
  });

  // setTodolist(todoList);

  return (
    <div className="boardView">
      <div>
        <h2>Not started</h2>
        <button type="button">+ Add task</button>
        {
          notStarted.map((todo) => <p key={todo.name}>{todo.tname}</p>)
        }
      </div>
      <div>
        <h2>In progress</h2>
        <button type="button">+ Add task</button>
        {
          inProgress.map((todo) => <p key={todo.name}>{todo.tname}</p>)
        }
      </div>
      <div>
        <h2>Completed</h2>
        <button type="button">+ Add task</button>
        {
          completed.map((todo) => <p key={todo.name}>{todo.tname}</p>)
        }
      </div>
    </div>
  );
};

export default ToDoList;

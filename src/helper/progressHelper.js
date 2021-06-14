let notStartedTodos;
let inProgressTodos;
let completedTodos;

const fetchPerProgress = (currentToDos) => {
  notStartedTodos = currentToDos.filter((todo) => todo.progress === 'Not started');
  inProgressTodos = currentToDos.filter((todo) => todo.progress === 'In progress');
  completedTodos = currentToDos.filter((todo) => todo.progress === 'Completed');
  return {
    notStartedTodos,
    inProgressTodos,
    completedTodos,
  };
};

export default fetchPerProgress;

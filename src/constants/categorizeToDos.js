const notStarted = [];
const inProgress = [];
const completed = [];

const categorizeToDos = (todos) => {
  for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].progress === 'Not started') {
      if (!notStarted.includes(todos[i])) {
        notStarted.push(todos[i]);
      }
    } else if (todos[i].progress === 'In progress') {
      if (!inProgress.includes(todos[i])) {
        inProgress.push(todos[i]);
      }
    } else if (!completed.includes(todos[i])) {
      completed.push(todos[i]);
    }
  }
};

export {
  notStarted, inProgress, completed, categorizeToDos,
};

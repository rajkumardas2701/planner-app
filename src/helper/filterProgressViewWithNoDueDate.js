const filterProgressViewWithNoDueDate = (tasks) => {
  console.group('inside helper of progress view and show tasks', tasks);
  const completed = tasks[1].Completed;
  const InProgress = tasks[1]['In progress'];
  const NotStarted = tasks[1]['Not started'];
  const newCompleted = [];
  const newInProgress = [];
  const newNotStarted = [];
  if (completed.length > 0) {
    for (let i = 0; i < completed.length; i += 1) {
      if (completed[i].dueDate === '') {
        newCompleted.push(completed[i]);
      }
    }
  }
  if (InProgress.length > 0) {
    for (let i = 0; i < InProgress.length; i += 1) {
      if (InProgress[i].dueDate === '') {
        newInProgress.push(InProgress[i]);
      }
    }
  }
  if (NotStarted.length > 0) {
    for (let i = 0; i < NotStarted.length; i += 1) {
      if (NotStarted[i].dueDate === '') {
        newNotStarted.push(NotStarted[i]);
      }
    }
  }
  return [{}, {
    'Not started': newNotStarted,
    'In progress': newInProgress,
    Completed: newCompleted,
  }];
};

// const completedNoDueTask = () => {

// };

export default filterProgressViewWithNoDueDate;

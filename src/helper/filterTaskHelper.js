import fetchPerDueDate from './dueDateHelper';
import fetchPerProgress from './progressHelper';

const DUETASKARR = [
  'Late',
  'Today',
  'Tomorrow',
  'This Week',
  'Next Week',
  'Future',
  'No Date',
];
const DUEHELPERARR = [
  'late',
  'today',
  'tomorrow',
  'thisWeek',
  'nextWeek',
  'future',
  'noDueDate',
];
const PROGRESSTASKARR = [
  'Not started', 'In progress', 'Completed',
];
const PROGRESSHELPERARR = [
  'notStartedTodos',
  'inProgressTodos',
  'completedTodos',
];

const filterTaskHelper = (tasks, filters) => {
  const TaskList = [];
  const dueTasks = {
    Late: null,
    Today: null,
    Tomorrow: null,
    'This Week': null,
    'Next Week': null,
    Future: null,
    'No Date': null,
  };
  const progressTasks = {
    'Not started': null,
    'In progress': null,
    Completed: null,
  };
  if (Object.values(filters).every((task) => task === false)) {
    console.log('inside task helper with all false', tasks);
    return tasks;
  }
  const perProgress = fetchPerProgress(tasks);
  const perDue = fetchPerDueDate(tasks);

  for (let i = 0; i < DUEHELPERARR.length; i += 1) {
    if (filters[DUETASKARR[i]] === true && perDue[DUEHELPERARR[i]].length > 0) {
      dueTasks[DUETASKARR[i]] = perDue[DUEHELPERARR[i]];
    }
  }
  for (let i = 0; i < PROGRESSHELPERARR.length; i += 1) {
    if (filters[PROGRESSTASKARR[i]] === true && perProgress[PROGRESSHELPERARR[i]].length > 0) {
      progressTasks[PROGRESSTASKARR[i]] = perProgress[PROGRESSHELPERARR[i]];
    }
  }
  TaskList.push(dueTasks);
  TaskList.push(progressTasks);
  console.log('inside task helper with filters', TaskList);
  return TaskList;
};

const withNoFilter = (tasks) => {
  const TaskList = [];
  const dueTasks = {
    Late: null,
    Today: null,
    Tomorrow: null,
    'This Week': null,
    'Next Week': null,
    Future: null,
    'No Date': null,
  };
  const progressTasks = {
    'Not started': null,
    'In progress': null,
    Completed: null,
  };
  const perProgress = fetchPerProgress(tasks);
  const perDue = fetchPerDueDate(tasks);
  for (let i = 0; i < DUEHELPERARR.length; i += 1) {
    dueTasks[DUETASKARR[i]] = perDue[DUEHELPERARR[i]];
  }
  for (let i = 0; i < PROGRESSHELPERARR.length; i += 1) {
    progressTasks[PROGRESSTASKARR[i]] = perProgress[PROGRESSHELPERARR[i]];
  }
  TaskList.push(dueTasks);
  TaskList.push(progressTasks);
  console.log('inside task helper without filters', TaskList);
  return TaskList;
};

export { filterTaskHelper, withNoFilter };

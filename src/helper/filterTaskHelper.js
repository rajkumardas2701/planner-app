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
  if (Object.values(filters).every((state) => state === false)) {
    console.log('inside task helper with all false', tasks);
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
  }
  const filtersArr = Object.keys(filters).map((key) => filters[key]);
  const dueFilters = filtersArr.slice(0, 7);
  const progressFilters = filtersArr.slice(7, 11);
  console.log('dueFilters', dueFilters);
  console.log('progressFilters', progressFilters);
  const perDue = fetchPerDueDate(tasks);
  const perProgress = fetchPerProgress(tasks);

  if (dueFilters.every((ele) => ele === false)) {
    const dt = [];
    for (let i = 0; i < PROGRESSHELPERARR.length; i += 1) {
      if (filters[PROGRESSTASKARR[i]] === true
        && perProgress[PROGRESSHELPERARR[i]].length > 0) {
        progressTasks[PROGRESSTASKARR[i]] = perProgress[PROGRESSHELPERARR[i]];
        console.log('Inside Per progress loop', perProgress[PROGRESSHELPERARR[i]]);
        if (progressTasks[PROGRESSTASKARR[i]]) {
          for (let j = 0; j < perProgress[PROGRESSHELPERARR[i]].length; j += 1) {
            console.log('progress status in every element', perProgress[PROGRESSHELPERARR[i]][j].progress);
            console.log('every element of per progress', perProgress[PROGRESSHELPERARR[i]][j]);
            dt.push(perProgress[PROGRESSHELPERARR[i]][j]);
          }
        }
      }
    }
    console.log('final dts', dt);
    console.log('final progressTasks', progressTasks);
    if (dt.length > 0) {
      const duesInprogress = fetchPerDueDate(dt);
      for (let i = 0; i < DUEHELPERARR.length; i += 1) {
        dueTasks[DUETASKARR[i]] = duesInprogress[DUEHELPERARR[i]];
      }
    }
    TaskList.push(dueTasks);
    TaskList.push(progressTasks);
    console.log('inside task helper with filters', TaskList);
    return TaskList;
  }

  // if (progressFilters.every((ele) => ele === false)) {

  // }
  for (let i = 0; i < DUEHELPERARR.length; i += 1) {
    if (filters[DUETASKARR[i]] === true && perDue[DUEHELPERARR[i]].length > 0) {
      dueTasks[DUETASKARR[i]] = perDue[DUEHELPERARR[i]];
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

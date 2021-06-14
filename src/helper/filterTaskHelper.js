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
    // console.log('inside task helper with all false', tasks);
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
    // console.log('inside task helper without filters', TaskList);
    return TaskList;
  }
  const filtersArr = Object.keys(filters).map((key) => filters[key]);
  const dueFilters = filtersArr.slice(0, 7);
  const progressFilters = filtersArr.slice(7, 11);
  // console.log('dueFilters', dueFilters);
  // console.log('progressFilters', progressFilters);
  const perDue = fetchPerDueDate(tasks);
  const perProgress = fetchPerProgress(tasks);

  // when none of the due date filter is selected
  if (dueFilters.every((ele) => ele === false)) {
    const dt = [];
    for (let i = 0; i < PROGRESSHELPERARR.length; i += 1) {
      if (filters[PROGRESSTASKARR[i]] === true
        && perProgress[PROGRESSHELPERARR[i]].length > 0) {
        progressTasks[PROGRESSTASKARR[i]] = perProgress[PROGRESSHELPERARR[i]];
        // console.log('Inside Per progress loop', perProgress[PROGRESSHELPERARR[i]]);
        if (progressTasks[PROGRESSTASKARR[i]]) {
          for (let j = 0; j < perProgress[PROGRESSHELPERARR[i]].length; j += 1) {
            // console.log('progress status in every element',
            // perProgress[PROGRESSHELPERARR[i]][j].progress);
            // console.log('every element of per progress', perProgress[PROGRESSHELPERARR[i]][j]);
            dt.push(perProgress[PROGRESSHELPERARR[i]][j]);
          }
        }
      }
    }
    // console.log('final dts', dt);
    // console.log('final progressTasks', progressTasks);
    if (dt.length > 0) {
      const duesInprogress = fetchPerDueDate(dt);
      for (let i = 0; i < DUEHELPERARR.length; i += 1) {
        dueTasks[DUETASKARR[i]] = duesInprogress[DUEHELPERARR[i]];
      }
    }
    TaskList.push(dueTasks);
    TaskList.push(progressTasks);
    // console.log('inside task helper with filters', TaskList);
    return TaskList;
  }

  // when none of the progress filter is selected
  if (progressFilters.every((ele) => ele === false)) {
    const pt = [];
    for (let i = 0; i < DUEHELPERARR.length; i += 1) {
      if (filters[DUETASKARR[i]] === true
         && perDue[DUEHELPERARR[i]] && perDue[DUEHELPERARR[i]].length > 0) {
        dueTasks[DUETASKARR[i]] = perDue[DUEHELPERARR[i]];
        // console.log('Inside Per due loop', perDue[DUEHELPERARR[i]]);
        if (dueTasks[DUETASKARR[i]]) {
          for (let j = 0; j < perDue[DUEHELPERARR[i]].length; j += 1) {
            // console.log('due status in every element', perDue[DUEHELPERARR[i]][j].progress);
            // console.log('every element of per due', perDue[DUEHELPERARR[i]][j]);
            pt.push(perDue[DUEHELPERARR[i]][j]);
          }
        }
      }
    }
    // console.log(pt);
    // console.log('final pts', pt);
    // console.log('final due Tasks', dueTasks);
    if (pt.length > 0) {
      const progressInDues = fetchPerProgress(pt);
      for (let i = 0; i < PROGRESSHELPERARR.length; i += 1) {
        progressTasks[PROGRESSTASKARR[i]] = progressInDues[PROGRESSHELPERARR[i]];
      }
    }
    TaskList.push(dueTasks);
    TaskList.push(progressTasks);
    // console.log('inside task helper with filters', TaskList);
    return TaskList;
  }

  // common in progress and DueDate view
  const commonInProgressAndDues = [];
  for (let i = 0; i < PROGRESSHELPERARR.length; i += 1) {
    if (filters[PROGRESSTASKARR[i]] === true
      && perProgress[PROGRESSHELPERARR[i]].length > 0) {
      for (let j = 0; j < DUEHELPERARR.length; j += 1) {
        if (filters[DUETASKARR[j]] === true && perDue[DUEHELPERARR[j]].length > 0) {
          // progressPresentInDues.push(per);
          // duesPresentInprogress.push();
          // console.log('inside common condition', perDue[DUEHELPERARR[j]][0].progress);
          for (let k = 0; k < perDue[DUEHELPERARR[j]].length; k += 1) {
            if (PROGRESSTASKARR[i] === perDue[DUEHELPERARR[j]][k].progress) {
              commonInProgressAndDues.push(perDue[DUEHELPERARR[j]][k]);
            }
          }
        }
      }
    }
  }
  if (commonInProgressAndDues.length > 0) {
    const commonProgress = fetchPerProgress(commonInProgressAndDues);
    const commonDues = fetchPerDueDate(commonInProgressAndDues);
    for (let i = 0; i < PROGRESSHELPERARR.length; i += 1) {
      progressTasks[PROGRESSTASKARR[i]] = commonProgress[PROGRESSHELPERARR[i]];
    }
    for (let i = 0; i < DUEHELPERARR.length; i += 1) {
      dueTasks[DUETASKARR[i]] = commonDues[DUEHELPERARR[i]];
    }
  }
  TaskList.push(dueTasks);
  TaskList.push(progressTasks);
  // console.log('inside task helper with filters', TaskList);
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
  // console.log('inside task helper without filters', TaskList);
  return TaskList;
};

export { filterTaskHelper, withNoFilter };

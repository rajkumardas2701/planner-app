let late;
let today;
let tomorrow;
let thisWeek;
let nextWeek;
let future;
let noDueDate;

const dateDifference = (value) => {
  const diff = ((new Date(new Date().toISOString().slice(0, 10))).getTime()
  - (new Date(value)).getTime())
  / (1000 * 3600 * 24);
  // console.log('Date diff', diff);
  return diff;
};

const nextWeekdayDate = (date, dayInWeek) => {
  const res = new Date(date || new Date());
  res.setDate(res.getDate() + ((dayInWeek - 1 - res.getDay() + 7) % 7) + 1);
  return res;
};
const checkNextWeek = (date, value) => {
  const date1 = new Date(value);
  const todayObj = nextWeekdayDate(date, 7);
  const todayDate = todayObj.getDate();
  const todayDay = todayObj.getDay();
  const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay - 1));
  const lastDayofWeek = new Date(firstDayOfWeek);
  lastDayofWeek.setDate(lastDayofWeek.getDate() + 7);
  return date1 >= firstDayOfWeek && date1 <= lastDayofWeek;
};

const date = new Date();
const checkThisWeek = (value) => {
  const date = new Date(value);
  const todayObj = new Date();
  const todayDate = todayObj.getDate();
  const todayDay = todayObj.getDay();
  const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay - 1));
  const lastDayofWeek = new Date(firstDayOfWeek);
  lastDayofWeek.setDate(lastDayofWeek.getDate() + 7);
  return date >= firstDayOfWeek && date <= lastDayofWeek;
};

const fetchPerDueDate = (dueDateTodos) => {
  if (dueDateTodos.length > 0) {
    late = dueDateTodos.filter((todo) => dateDifference(todo.dueDate) > 0);
    today = dueDateTodos.filter((todo) => dateDifference(todo.dueDate) === 0);
    tomorrow = dueDateTodos.filter((todo) => dateDifference(todo.dueDate) === -1);
    thisWeek = dueDateTodos.filter((todo) => checkThisWeek(todo.dueDate)
    && !today.includes(todo) && !tomorrow.includes(todo) && !late.includes(todo));
    nextWeek = dueDateTodos.filter((todo) => checkNextWeek(date, todo.dueDate)
    && !today.includes(todo) && !tomorrow.includes(todo) && !thisWeek.includes(todo)
     && !late.includes(todo));
    future = dueDateTodos.filter((todo) => dateDifference(todo.dueDate) < -1
    && !thisWeek.includes(todo) && !nextWeek.includes(todo));
    noDueDate = dueDateTodos.filter((todo) => todo.dueDate === '');
  }
  return {
    late,
    today,
    tomorrow,
    thisWeek,
    nextWeek,
    future,
    noDueDate,
  };
};

export default fetchPerDueDate;

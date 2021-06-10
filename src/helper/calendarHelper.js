import moment from 'moment';

const getDaysInMonth = (month, year) => moment(`${month}-${year}`, 'MM-YYYY')
  .daysInMonth();
const getFirstWeekdayOfMonth = (month, year) => moment(`${month}-${year}`, 'MM-YYYY')
  .startOf('month').weekday();

const getPrevMonthYear = (month, year) => {
  if (month === 1) {
    return {
      month: 12,
      year: year - 1,
    };
  }
  return {
    month: month - 1,
    year,
  };
};
const getNextMonthYear = (month, year) => {
  if (month === 12) {
    return {
      month: 1,
      year: year + 1,
    };
  }
  return {
    month: month + 1,
    year,
  };
};
const getDatesInMonthDisplay = (month, year) => {
  const daysInMonth = getDaysInMonth(month, year);
  const firstWeekday = getFirstWeekdayOfMonth(month, year);
  const result = [];
  const prev = getPrevMonthYear(month, year);
  const prevDaysInMonth = getDaysInMonth(
    prev.month,
    prev.year,
  );
  for (let j = firstWeekday - 1; j >= 0; j -= 1) {
    result.push({
      date: moment(
        `${prev.month}-${prevDaysInMonth - j}-${prev.year}`,
        'MM-DD-YYYY',
      ).toDate(),
      currentMonth: false,
      dayEvents: [],
    });
  }
  for (let i = 1; i <= daysInMonth; i += 1) {
    result.push({
      date: moment(`${month}-${i}-${year}`, 'MM-DD-YYYY').toDate(),
      currentMonth: true,
      dayEvents: [],
    });
  }
  if (result.length < 42) {
    const daysToAdd = 42 - result.length;
    const next = getNextMonthYear(month, year);
    for (let k = 1; k <= daysToAdd; k += 1) {
      result.push({
        date: moment(
          `${next.month}-${k}-${next.year}`,
          'MM-DD-YYYY',
        ).toDate(),
        currentMonth: false,
        dayEvents: [],
      });
    }
  } return result;
};

const getDatesAndEvents = (month, year, events) => {
  const results = getDatesInMonthDisplay(month, year);
  for (let i = 0; i < results.length; i += 1) {
    for (let j = 0; j < events.length; j += 1) {
      // console.log('Date format in helper', moment(events[j].dueDate, 'YYYY-MM-DD').toDate());
      if (`${results[i].date}` === `${moment(events[j].dueDate, 'YYYY-MM-DD').toDate()}`) {
        results[i].dayEvents.push(events[j]);
      }
    }
  } return results;
};

const enumerateDaysInWeek = (selectDate, events) => {
  let fromDate = moment(selectDate).startOf('week');
  const toDate = moment(selectDate).endOf('week');
  const results = [];
  // const eventInDays = [];
  while (fromDate <= toDate) {
    results.push({
      date: fromDate.toDate(),
      dayEvents: [],
    });

    fromDate = moment(fromDate).add(1, 'days');
  }
  // return results;
  for (let i = 0; i < results.length; i += 1) {
    for (let j = 0; j < events.length; j += 1) {
      // console.log('Date format in helper', moment(events[j].dueDate, 'YYYY-MM-DD').toDate());
      if (`${results[i].date}` === `${moment(events[j].dueDate).toDate()}`) {
        results[i].dayEvents.push(events[j]);
      }
    }
  } return results;
};

export { getDatesInMonthDisplay, enumerateDaysInWeek, getDatesAndEvents };

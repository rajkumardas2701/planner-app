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
    });
  }
  for (let i = 1; i <= daysInMonth; i += 1) {
    result.push({
      date: moment(`${month}-${i}-${year}`, 'MM-DD-YYYY').toDate(),
      currentMonth: true,
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
      });
    }
  } return result;
};

const enumerateDaysInWeek = (selectDate) => {
  let fromDate = moment(selectDate).startOf('week');
  const toDate = moment(selectDate).endOf('week');
  const results = [];
  console.log('fromDate', fromDate);
  console.log('toDate', toDate);
  // while (fromDate.isSameOrBefore(toDate)) {
  //   results.push(fromDate);
  //   fromDate.add(1, 'days');
  // }
  while (fromDate <= toDate) {
    results.push(fromDate);
    fromDate = moment(fromDate).add(1, 'days');
  }
  console.log('results', results);
  return results;
};

export { getDatesInMonthDisplay, enumerateDaysInWeek };

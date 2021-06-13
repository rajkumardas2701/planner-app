const arrOfEvents = (events) => {
  const eventlist = [];
  const existing = [];
  // console.log('Events inside helper', events);
  const eventcategories = [
    ['Late',
      'Today',
      'Tomorrow',
      'This Week',
      'Next Week',
      'Future',
      'No Date',
    ],
    [
      'Not started',
      'In progress',
      'Completed',
    ],
  ];
  // console.log(eventcategories);
  for (let i = 0; i < events.length; i += 1) {
    // console.log('events length', eventcategories[i].length);
    for (let j = 0; j < eventcategories[i].length; j += 1) {
      if (events[i][eventcategories[i][j]] && events[i][eventcategories[i][j]].length > 0) {
        // console.log('Length of each events:', events[i][eventcategories[i][j]]);
        for (let k = 0; k < events[i][eventcategories[i][j]].length; k += 1) {
          // console.log(events[i][eventcategories[i][j]][k]);
          const obj = events[i][eventcategories[i][j]][k];
          // const instance = {
          //   title: obj.name,
          //   start: obj.dueDate,
          //   end: obj.dueDate,
          //   allDay: true,
          // };
          if (!existing.includes(obj.id)) {
            existing.push(obj.id);
            eventlist.push(obj);
          }
        }
      }
    }
  }
  // console.log('Eventlist', eventlist);
  return eventlist;
};

export default arrOfEvents;

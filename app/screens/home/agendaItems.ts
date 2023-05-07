const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(12);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(numberOfDays: number) {
  const array = [];
  for (let index = 1; index <= numberOfDays; index++) {
    let d = Date.now();
    if (index > 8) {
      // set dates on the next month
      const newMonth = new Date(d).getMonth() + 1;
      d = new Date(d).setMonth(newMonth);
    }
    const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}
function getPastDate(numberOfDays: number) {
  return new Date(Date.now() - 864e5 * numberOfDays)
    .toISOString()
    .split('T')[0];
}

export const agendaItems = [
  {
    id: 1,
    title: dates[0],
    marked: true,
    data: [{hour: '12am', duration: '1h', title: 'First Yoga'}],
  },
  {
    id: 2,
    title: dates[1],
    data: [
      {hour: '4pm', duration: '1h', title: 'Pilates ABC'},
      {hour: '5pm', duration: '1h', title: 'Vinyasa Yoga'},
    ],
  },
  {
    id: 3,
    title: dates[2],
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'},
    ],
  },
  {
    id: 4,
    title: dates[3],
    data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}],
  },
];

export function getMarkedDates(trackers: any) {
  const marked: any = {};

  trackers.forEach((item: any) => {
    // NOTE: only mark dates with data
    if (item?.marked && item?.data?.length > 0) {
      marked[item.title] = {marked: true};
    } else {
      marked[item.title] = {marked: false};
    }
  });
  return marked;
}

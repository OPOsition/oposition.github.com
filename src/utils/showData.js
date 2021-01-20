function formatData(data) {
  const keys = Object.keys(data);
  const result = [];
  keys.map((key) => {
    const date = new Date(key);
    const weekNumber = getWeekNumber(date);

    if (!result[weekNumber]) result[weekNumber] = [];

    result[weekNumber].push({
      date: date,
      smoked: data[key],
      dateKey: key,
      weekId: weekNumber,
    });
  });
  const filtredResult = result.filter((r) => Boolean(r));
  return filtredResult;
}

function getWeekNumber(date) {
  const u = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = u.getUTCDay() || 7;
  u.setUTCDate(u.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(u.getUTCFullYear(), 0, 1));
  return Math.ceil(((u - yearStart) / 86400000 + 1) / 7);
}

export { formatData };

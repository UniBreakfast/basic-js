module.exports = function getSeason(date) {

  if (date === undefined) return 'Unable to determine the time of year!'

  if (!(date instanceof Date) ||
      String(new Date(date.getTime())) != String(date))
        throw new Error('value provided is not a date')

  const month = date.getMonth()
  switch (true) {
    case month < 2 || month > 10: return 'winter'
    case month < 5: return 'spring'
    case month < 8: return 'summer'
    default: return 'autumn'
  }
};

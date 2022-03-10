/*
  The function lengthenDate should take a date in the format '21.03.2017' and return a string in the format 'Tuesday 9th February 2017'
*/

function lengthenDate(str) {
  const strArr = str.split('.');

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const date = strArr[0];
  const month = months[strArr[1] - 1];
  const year = strArr[2];

  if (date > 31 || month === undefined) return 'Not a Valid date';
  const newDate = new Date(`${month} ${date}, ${year}`);
  const day = weekdays[newDate.getDay()];

  return `${day} ${date}xx ${month} ${year}`;
}

module.exports = lengthenDate;

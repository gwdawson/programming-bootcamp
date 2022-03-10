/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(n) {
  const numArr = n.toString().split('');

  let count = 0;

  if (numArr.length === 1) return n;

  if (numArr.indexOf('.') !== -1) {
    numArr.splice(numArr.indexOf('.'), 1);
  }

  numArr.forEach((num) => (count += Number(num)));

  return count;
}

module.exports = sumDigits;

/*
  the areOrdered function should take an array of numbers as an input.
  It should return true if all the numbers are in ascending order and false if they are not.
  An empty array should return false.
*/

function areOrdered(arr) {
  if (arr.length < 1) {
    return false;
  }
  for (const num of arr) {
    if (num !== arr.length - 1)
      if (arr[num] > arr[num + 1]) {
        return false;
      }
  }
  return true;
}

module.exports = areOrdered;

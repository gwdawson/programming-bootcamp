/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/

function max(arr) {
  if (arr.length < 1) {
    return 0;
  }
  return Math.max(...arr);
}

function min(arr) {
  if (arr.length < 1) {
    return 0;
  }
  return Math.min(...arr);
}

module.exports = { max, min };

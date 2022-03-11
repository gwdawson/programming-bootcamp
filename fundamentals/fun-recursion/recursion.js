function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

function sum(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return num + sum(num - 1);
}

function reverseAString(str) {
  if (str.length === 0) return str;
  if (str.length === 1) return str;
  return reverseAString(str.substring(1)) + str.charAt(0);
}

function countWhiteSpace(str, count) {
  if (str === '') return count;
  if (str[0] === ' ') {
    count++;
  }
  return countWhiteSpace(str.substring(1), count);
}

// 99 -> 9 + 9 = 18 -> 1 + 8 = 9
function sumDigits(num) {
  let numArr = num.toString().split(''); // [9, 9]
  if (num.toString().length === 1) return num;

  let reduced = numArr.reduce((curr, prev) => parseInt(curr) + parseInt(prev));
  return sumDigits(reduced);
}

function fibonacci(num) {
  if (num < 3) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function nestedArrays(arr) {
  count = 0;
  for (i of arr) {
    if (Array.isArray(i)) {
      count += nestedArrays(i);
    }
    count++;
  }
  return count;
}

function deepIncludes(arr, item) {
  for (const i of arr) {
    if (Array.isArray(i)) {
      return deepIncludes(i, item);
    }
    if (i === item) {
      return true;
    }
  }
  return false;
}

function countObjects(obj) {
  count = 1;
  for (const i in obj) {
    if (typeof obj[i] === 'object') {
      count += countObjects(obj[i]);
    }
  }
  return count;
}

module.exports = {
  factorial,
  sum,
  reverseAString,
  countWhiteSpace,
  sumDigits,
  fibonacci,
  nestedArrays,
  deepIncludes,
  countObjects,
};

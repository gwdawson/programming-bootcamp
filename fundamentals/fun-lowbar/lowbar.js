const _ = {};

_.identity = (x) => {
  return x;
};

_.fromPairs = (array) => {
  if (array.length === 0) {
    return {};
  }
  const pairObj = {};
  for (i = 0; i < array.length; i++) {
    pairObj[array[i][0]] = array[i][1];
  }
  return pairObj;
};

_.times = (number, type) => {
  const array = [];

  if (number === 0) {
    return [];
  }

  for (let i = 0; i < number; i++) {
    if (type === 'number') {
      array.push(i);
    } else if (type === 'boolean') {
      if (i < 1) {
        array.push(false);
      } else {
        array.push(true);
      }
    } else if (type === 'string') {
      array.push(String(i));
    }
  }

  return array;
};

_.map = (input, func) => {
  const mappedArr = [];
  const key = func();

  // if input is an array do this ...
  if (Array.isArray(input)) {
    // loop through all items in the array
    for (i = 0; i < input.length; i++) {
      // if item is a number
      if (input[i] instanceof Number) {
        // do something ...
        // console.log(input);
        // console.log(input[i]);
        // for (i = 0; i < input.length; i++) {
        // mappedArr.push(func(input[i]));
        // mappedArr.push(func(input[i]));
        // }
        // return mappedArr;
      } else {
        /* if item is not a number */
        // do something ...
        // console.log(input);
        // console.log(input[i]);
        // let objkeys = Object.keys(input);
        // for (let i = 0; i < objkeys.length; i++) {
        // mappedArr.push(input[i].func(input[objkeys[i]]));
        // mappedArr.push(input[i].user);
        // arr.push(arg(col[objkeys[i]]));
        // }
        // return mappedArr;
      }
    }
  }
  // if input is an object do this ... (test #3 + #4)
  for (i in input) {
    mappedArr.push(func(input[i]));
  }
  return mappedArr;
};

module.exports = _;

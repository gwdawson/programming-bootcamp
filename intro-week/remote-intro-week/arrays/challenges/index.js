const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function getLastItem(arr) {
  return arr[arr.length - 1];
}

runTest("getLastItem() returns the last item in an array", function () {
  check(getLastItem(["a", "b", "c", "d"])).isEqualTo("d");
  check(getLastItem(["apple", "banana", "pear", "kiwi"])).isEqualTo("kiwi");
});

function getLastNItems(arr, n) {
  return arr.slice(arr.length - n);
}

runTest("getLastNItems() returns the last n items in an array", function () {
  check(getLastNItems(["a", "b", "c", "d"], 2)).isEqualTo(["c", "d"]);
  check(getLastNItems(["apple", "banana", "pear", "kiwi"], 0)).isEqualTo([]);
  check(getLastNItems(["apple", "banana", "pear", "kiwi"], 3)).isEqualTo(["banana", "pear", "kiwi"]);
});

function removeItem(arr, n) {
  return [...arr.slice(0, n), ...arr.slice(n + 1)];
}

runTest("removeItem() removes an item at a given index", function () {
  check(removeItem(["a", "b", "c", "d"], 2)).isEqualTo(["a", "b", "d"]);
  check(removeItem(["a", "b", "c", "d"], 0)).isEqualTo(["b", "c", "d"]);
  check(removeItem(["a", "b", "c", "d"], 1)).isEqualTo(["a", "c", "d"]);
});

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

runTest("mergeArrays() will concatenate two arrays together", function () {
  check(mergeArrays(["a", "b"], ["c", "d"])).isEqualTo(["a", "b", "c", "d"]);
  check(mergeArrays([1], [3, 5, 7])).isEqualTo([1, 3, 5, 7]);
  check(mergeArrays(["x", "y", "z"], [1, 2, 3, 4])).isEqualTo(["x", "y", "z", 1, 2, 3, 4]);
});

function getSandwichFilling(sandwich) {
  sandwich.shift();
  sandwich.pop();
  return sandwich;
}

runTest("getSandwichFilling() returns the inner elements of an array", function () {
  check(getSandwichFilling(["a", "b", "c", "d"])).isEqualTo(["b", "c"]);
  check(getSandwichFilling([10, 20, 30, 40, 50, 60])).isEqualTo([20, 30, 40, 50]);
  check(getSandwichFilling(["northcoders", "are", "the", "best"])).isEqualTo(["are", "the"]);
});

function isEmptyArray(arr) {
  return arr.length === 0;
}

runTest("isEmptyArray() checks if an array is empty", function () {
  check(isEmptyArray([])).isEqualTo(true);
  check(isEmptyArray(["a", "b", "c", "d"])).isEqualTo(false);
  check(isEmptyArray(["a"])).isEqualTo(false);
});

function howManyArguments(...args) {
  return args.length;
}

runTest("howManyArguments() returns the number of items passed on a single call", function () {
  check(howManyArguments("a", "b", "c")).isEqualTo(3);
  check(howManyArguments()).isEqualTo(0);
  check(howManyArguments(1, 2, 3, 4, 5)).isEqualTo(5);
  check(howManyArguments("the", "meaning", "of", "life", "is", 42)).isEqualTo(6);
});

function updatePosition(coords, direction) {
  switch (direction) {
    case "up":
      return [coords[0], coords[1] + 1];
    case "down":
      return [coords[0], coords[1] - 1];
    case "right":
      return [coords[0] + 1, coords[1]];
    case "left":
      return [coords[0] - 1, coords[1]];
  }
}

runTest("updatePosition() updates a co-ordinates array", function () {
  check(updatePosition([10, 10], "up")).isEqualTo([10, 11]);
  check(updatePosition([0, 0], "down")).isEqualTo([0, -1]);
  check(updatePosition([3, 3], "left")).isEqualTo([2, 3]);
  check(updatePosition([7, 50], "right")).isEqualTo([8, 50]);
});

function addCoins(collection, coin) {
  switch (coin) {
    case "1p":
      collection[0].push("1p");
      return collection;
    case "2p":
      collection[1].push("2p");
      return collection;
    case "5p":
      collection[2].push("5p");
      return collection;
    case "10p":
      collection[3].push("10p");
      return collection;
  }
}

runTest("addCoins() will update the coins in a given slot", function () {
  check(addCoins([[], [], [], []], "1p")).isEqualTo([["1p"], [], [], []]);
  check(addCoins([[], [], [], []], "2p")).isEqualTo([[], ["2p"], [], []]);
  check(addCoins([[], ["2p"], [], []], "2p")).isEqualTo([[], ["2p", "2p"], [], []]);
  check(addCoins([[], [], [], []], "5p")).isEqualTo([[], [], ["5p"], []]);
  check(addCoins([["1p"], [], [], ["10p", "10p"]], "2p")).isEqualTo([["1p"], ["2p"], [], ["10p", "10p"]]);
  check(addCoins([[], [], ["5p", "5p"], []], "5p")).isEqualTo([[], [], ["5p", "5p", "5p"], []]);
});

function accessItem(arr, index) {
  return arr[index % arr.length];
}

runTest("accessItem() can access an item inside in an array with a given index below the array length", function () {
  check(accessItem(["a", "b", "c", "d"], 2)).isEqualTo("c");
  check(accessItem(["a", "b", "c", "d"], 0)).isEqualTo("a");
  check(accessItem(["a", "b", "c", "d"], 3)).isEqualTo("d");
});

runTest(
  "accessItem() can access an item inside in an array with an index equal to or above the array length",
  function () {
    check(accessItem(["a", "b", "c", "d"], 4)).isEqualTo("a");
    check(accessItem(["a", "b", "c", "d"], 6)).isEqualTo("c");
    check(accessItem(["a", "b", "c", "d"], 10)).isEqualTo("c");
    check(accessItem(["a", "b", "c", "d"], 11)).isEqualTo("d");
  }
);

function findDayOfTheWeek(num) {
  switch (num) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
  }
}

runTest("findDayOfTheWeek() returns the day of the week given a passed number", function () {
  check(findDayOfTheWeek(2)).isEqualTo("Tuesday");
  check(findDayOfTheWeek(3)).isEqualTo("Wednesday");
  check(findDayOfTheWeek(1)).isEqualTo("Monday");
  check(findDayOfTheWeek(6)).isEqualTo("Saturday");
  check(findDayOfTheWeek(7)).isEqualTo("Sunday");
});

function extractNumber(str) {
  strNum = "";
  str.split("").forEach((char) => {
    if (char.match(/\d/) !== null) {
      strNum += char.match(/\d/)[0];
    }
  });
  return parseInt(strNum);
}

runTest("extractNumber() should return the number buried inside a string of random characters", function () {
  check(extractNumber("lasjdasasj(123)asljdlajk")).isEqualTo(123);
  check(extractNumber("qwasdaoyer(44687)iuwyeibasdahgsd")).isEqualTo(44687);
  check(extractNumber("qwasdasdfsyer(19827)iusdfsdfsd")).isEqualTo(19827);
  check(extractNumber("qwasdasdfsyer(5601)iusdfsdfsd")).isEqualTo(5601);
  check(extractNumber("qwasdasdfsyer(29)iusdfsdfsd")).isEqualTo(29);
  check(extractNumber("qwasdasdfsyer(5)iusdfsdfsd")).isEqualTo(5);
  check(extractNumber("qwasdasdfsyer(513)iusdfsdfsd")).isEqualTo(513);
});

const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges you are expected to declare your own function with the name and suggested behaviour provided.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
Remember to use an appropriate array method in your implementation.
*/

function makeAllUpperCase(arr) {
  const upperCase = arr.map((element) => {
    return element.toUpperCase();
  });
  return upperCase;
}

runTest("makeAllUpperCase() returns an array of capitalised strings", function () {
  check(makeAllUpperCase(["a", "b", "c"])).isEqualTo(["A", "B", "C"]);
  check(makeAllUpperCase(["I", "love", "coding"])).isEqualTo(["I", "LOVE", "CODING"]);
});

function collectStrings(arr) {
  const strings = arr.filter((item) => {
    if (typeof item === "string") {
      return item;
    }
  });
  return strings;
}

runTest("collectStrings() can get all the strings from an array", function () {
  check(collectStrings(["a", "b", "c"])).isEqualTo(["a", "b", "c"]);
  check(collectStrings(["a", 10, "b", 1000, "c"])).isEqualTo(["a", "b", "c"]);
  check(collectStrings([true, "hello", 45, "there", false])).isEqualTo(["hello", "there"]);
  check(collectStrings([1, 2, 3, 4, 5])).isEqualTo([]);
});

function getEvenNumbers(arr) {
  const even = arr.filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });
  return even;
}

runTest("getEvenNumbers() can get all the even numbers from an array of numbers", function () {
  check(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).isEqualTo([2, 4, 6, 8, 10]);
  check(getEvenNumbers([9, 100, 13, 20])).isEqualTo([100, 20]);
});

function collectPlurals(arr) {
  const stringsS = arr.filter((string) => {
    if (string.endsWith("s")) {
      return string;
    }
  });
  return stringsS;
}

runTest("collectPlurals() can collect all the strings ending in an s", function () {
  check(collectPlurals(["dogs", "cat", "apples", "kittens", "kiwi"])).isEqualTo(["dogs", "apples", "kittens"]);
  check(collectPlurals(["abcs", "humans", "thoughts", "cloud", "computer", "cups"])).isEqualTo([
    "abcs",
    "humans",
    "thoughts",
    "cups",
  ]);
});

function createArray(num, str) {
  const stringN = [];
  for (let i = 0; i < num; i++) {
    stringN.push(str);
  }
  return stringN;
}

runTest("createArray() creates an array of the specified length using a specified character", function () {
  check(createArray(3, "!")).isEqualTo(["!", "!", "!"]);
  check(createArray(5, "a")).isEqualTo(["a", "a", "a", "a", "a"]);
  check(createArray(7, "X")).isEqualTo(["X", "X", "X", "X", "X", "X", "X"]);
});

function deleteManyPasswords(arr) {
  arr.forEach((element) => {
    delete element.password;
  });
  return arr;
}

runTest("deleteManyPasswords() deletes the password property for each user", function () {
  check(
    deleteManyPasswords([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
  ).isEqualTo([{ name: "Barry" }, { name: "Sandeep" }, { name: "Kavita" }]);
});

function countTheObjects(arr) {
  let objCount = 0;
  arr.forEach((item) => {
    if (typeof item === "object") {
      objCount++;
    }
  });
  return objCount;
}

runTest("countTheObjects() counts all the objects in an array of multi-type items", function () {
  check(
    countTheObjects([
      { name: "Barry", password: "ilovetea" },
      { name: "Sandeep", password: "ilovecoffee" },
      { name: "Kavita", password: "ilovepie" },
    ])
  ).isEqualTo(3);
  check(countTheObjects([{}, {}, {}, {}, {}])).isEqualTo(5);
  check(countTheObjects([1, {}, true, {}, {}, false, {}, {}])).isEqualTo(5);
  check(countTheObjects([1, { cat: "Schnitzel" }, true, {}, {}, false, 42, {}, {}])).isEqualTo(5);
  check(countTheObjects([7, "hello", 45, true])).isEqualTo(0);
});

function getEmptyTills(arr) {
  const emptyTills = arr.filter((till) => {
    if (till.checkout.length === 0) {
      return till;
    }
  });
  return emptyTills;
}

runTest("getEmptyTills() gets all the tills that are empty", function () {
  const tills = [
    {
      name: "John",
      checkout: ["bread", "eggs", "milk", "sausages"],
    },
    {
      name: "Foluso",
      checkout: [],
    },
    {
      name: "Anat",
      checkout: ["chocolate"],
    },
    {
      name: "jonny",
      checkout: [],
    },
  ];
  check(getEmptyTills(tills)).isEqualTo([
    {
      name: "Foluso",
      checkout: [],
    },
    {
      name: "jonny",
      checkout: [],
    },
  ]);
});

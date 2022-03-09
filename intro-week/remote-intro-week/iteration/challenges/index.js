const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function makeAllUpperCase(arr) {
  const upper = arr.map((str) => {
    return str.toUpperCase();
  });
  return upper;
}

runTest("makeAllUpperCase() can convert all strings to upper case", function () {
  check(makeAllUpperCase(["a", "b", "c"])).isEqualTo(["A", "B", "C"]);
  check(makeAllUpperCase(["I", "love", "coding"])).isEqualTo(["I", "LOVE", "CODING"]);
});

function collectStrings(arr) {
  const str = arr.filter((item) => {
    if (typeof item === "string") {
      return item;
    }
  });
  return str;
}

runTest("collectStrings() can get all the strings from an array", function () {
  check(collectStrings(["a", "b", "c"])).isEqualTo(["a", "b", "c"]);
  check(collectStrings(["a", 10, "b", 1000, "c"])).isEqualTo(["a", "b", "c"]);
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
  check(getEvenNumbers([78, 5, 9, 11, 24])).isEqualTo([78, 24]);
});

function collectPlurals(arr) {
  const plurals = arr.filter((word) => {
    if (word.endsWith("s")) {
      return word;
    }
  });
  return plurals;
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

function createArray(length, char) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(char);
  }
  return arr;
}

runTest("createArray() creates an array of the specified length using a specified character", function () {
  check(createArray(3, "!")).isEqualTo(["!", "!", "!"]);
  check(createArray(5, "a")).isEqualTo(["a", "a", "a", "a", "a"]);
});

function deleteManyPasswords(arr) {
  for (let obj of arr) {
    delete obj.password;
  }
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

function collectTheVowels(str) {
  const vowels = str.split("").filter((char) => {
    return ["a", "e", "i", "o", "u"].includes(char) ? char : null;
  });
  return vowels.join("");
}

runTest(
  "collectTheVowels() takes a string of many letters and returns a string containing those vowels in correct order",
  function () {
    check(collectTheVowels("a")).isEqualTo("a");
    check(collectTheVowels("bcd")).isEqualTo("");
    check(collectTheVowels("bcdepiaouk")).isEqualTo("eiaou");
    check(collectTheVowels("hello world")).isEqualTo("eoo");
  }
);

function containsNoRepeats(str) {
  for (const char of str) {
    if (str.indexOf(char) !== str.lastIndexOf(char)) {
      return false;
    }
  }
  return true;
}

runTest(
  "containsNoRepeats() takes a string and returns true if each character only appears once in the string",
  function () {
    check(containsNoRepeats("dog")).isEqualTo(true);
    check(containsNoRepeats("oo")).isEqualTo(false);
    check(containsNoRepeats("dooog")).isEqualTo(false);
    check(containsNoRepeats("iHaveRepeats")).isEqualTo(false);
    check(containsNoRepeats("anat")).isEqualTo(false);
    check(containsNoRepeats("cat")).isEqualTo(true);
    check(containsNoRepeats("abcde")).isEqualTo(true);
    check(containsNoRepeats("abcdea")).isEqualTo(false);
  }
);

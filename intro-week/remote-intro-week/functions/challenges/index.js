const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges you are expected to declare your own function with the name and suggested behaviour provided.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

const modulo = (a, b) => {
  return a % b;
};

runTest("modulo() returns the correct remainder", function () {
  check(modulo(10, 2)).isEqualTo(0);
  check(modulo(119, 10)).isEqualTo(9);
  check(modulo(50, 6)).isEqualTo(2);
});

const squareRoot = (num) => {
  return Math.sqrt(num);
};

runTest("squareRoot() returns the square root of a positive integer", function () {
  check(squareRoot(100)).isEqualTo(10);
  check(squareRoot(25)).isEqualTo(5);
  check(squareRoot(121)).isEqualTo(11);
});

const raiseToPower = (m, n) => {
  return Math.pow(m, n);
};

runTest("raiseToPower() raises given number to the given power", function () {
  check(raiseToPower(10, 3)).isEqualTo(1000);
  check(raiseToPower(25, 2)).isEqualTo(625);
  check(raiseToPower(10, 0)).isEqualTo(1);
});

const capitaliseFirstLetter = (str) => {
  return str.split("")[0].toUpperCase() + str.slice(1);
};

runTest("capitaliseFirstLetter() capitalises the first letter in a string", function () {
  check(capitaliseFirstLetter("bang")).isEqualTo("Bang");
  check(capitaliseFirstLetter("apple")).isEqualTo("Apple");
  check(capitaliseFirstLetter("coding")).isEqualTo("Coding");
});

const areValuesEqual = (a, b) => {
  return a === b;
};

runTest("areValuesEqual() checks if two values are strictly equal", function () {
  check(areValuesEqual(10, 10)).isEqualTo(true);
  check(areValuesEqual("hello", "hello")).isEqualTo(true);
  check(areValuesEqual("good", "bad")).isEqualTo(false);
  check(areValuesEqual("10", 10)).isEqualTo(false);
});

const isFromThe60s = (year) => {
  const sixties = [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969];
  return sixties.includes(year);
};

runTest("isFromThe60s() checks if a number is within 1960 to 1969 (inclusive)", function () {
  check(isFromThe60s(1962)).isEqualTo(true);
  check(isFromThe60s(1965)).isEqualTo(true);
  check(isFromThe60s(1970)).isEqualTo(false);
  check(isFromThe60s(1960)).isEqualTo(true);
  check(isFromThe60s(1959)).isEqualTo(false);
  check(isFromThe60s(1901)).isEqualTo(false);
  check(isFromThe60s(1990)).isEqualTo(false);
});

const isEvenLength = (str) => {
  return str.length % 2 === 0;
};

runTest("isEvenLength() checks if string has even number of characters", function () {
  check(isEvenLength("hello")).isEqualTo(false);
  check(isEvenLength("northcoders")).isEqualTo(false);
  check(isEvenLength("abcd")).isEqualTo(true);
  check(isEvenLength("even")).isEqualTo(true);
});

const isAbsolutePath = (str) => {
  return str.split("")[0] === "/";
};

runTest("isAbsolutePath() checks if a file path is absolute or relative", function () {
  check(isAbsolutePath("/Users/mitch")).isEqualTo(true);
  check(isAbsolutePath("/Users/mitch/northcoders/remote_course/remote_precourse_1")).isEqualTo(true);
  check(isAbsolutePath("../composers")).isEqualTo(false);
  check(isAbsolutePath("./applications/my-awesome-app.js")).isEqualTo(false);
});

const getMiddle = (s) => {
  const middle = s.length / 2;
  return s.length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle - 0.5];
};

runTest("getMiddle() returns the middle character in a string of odd length", function () {
  check(getMiddle("abc")).isEqualTo("b");
  check(getMiddle("mitch")).isEqualTo("t");
});

runTest("getMiddle() returns the middle characters in a string of even length", function () {
  check(getMiddle("abcd")).isEqualTo("bc");
  check(getMiddle("blob")).isEqualTo("lo");
});

const getCharCode = (str) => {
  return `The ASCII code for ${str} is ${str.charCodeAt(0)}`;
};

runTest("getCharCode() will return a message stating the ASCII code of a passed char", function () {
  check(getCharCode("A")).isEqualTo("The ASCII code for A is 65");
  check(getCharCode("b")).isEqualTo("The ASCII code for b is 98");
  check(getCharCode("z")).isEqualTo("The ASCII code for z is 122");
  check(getCharCode("k")).isEqualTo("The ASCII code for k is 107");
  check(getCharCode("!")).isEqualTo("The ASCII code for ! is 33");
  check(getCharCode("M")).isEqualTo("The ASCII code for M is 77");
});

const createPercentage = (a, b) => {
  return `${Math.round((a / b) * 100)}%`;
};

runTest('createPercentage() creates a percentage string in the form "--%"', function () {
  check(createPercentage(1, 2)).isEqualTo("50%");
  check(createPercentage(50, 100)).isEqualTo("50%");
  check(createPercentage(2, 3)).isEqualTo("67%");
  check(createPercentage(3, 4)).isEqualTo("75%");
  check(createPercentage(1, 7)).isEqualTo("14%");
});

const extractNumber = (str) => {
  strNum = "";
  str.split("").forEach((char) => {
    if (char.match(/\d/) !== null) {
      strNum += char.match(/\d/)[0];
    }
  });
  return parseInt(strNum);
};

runTest("extractNumber() should return the number buried inside a string", function () {
  check(extractNumber("lasjdasasj(123)asljdlajk")).isEqualTo(123);
  check(extractNumber("qwasdaoyer(44687)iuwyeibasdahgsd")).isEqualTo(44687);
  check(extractNumber("qwasdasdfsyer(19827)iusdfsdfsd")).isEqualTo(19827);
  check(extractNumber("qwasdasdfsyer(5601)iusdfsdfsd")).isEqualTo(5601);
  check(extractNumber("qwasdasdfsyer(29)iusdfsdfsd")).isEqualTo(29);
});

const { check, runTest, skipTest } = require("../../test-api");

/*
convertToBinary()


Implement a function which takes any decimal number and converts it into binary format.
The return value of the function should always be a string of "O"s and "1"s representing the binary number

Do not use .toString(2) for this problem - as this is the functionality you're trying to replicate :)
*/

// Once you have passed the current test, change skipTest on the following test to runTest so you are able to run it with Node

function convertToBinary() {}

runTest("can convert a single digit decimal number to binary", function () {
  check(convertToBinary(0)).isEqualTo("0");
  check(convertToBinary(1)).isEqualTo("1");
  check(convertToBinary(2)).isEqualTo("10");
  check(convertToBinary(3)).isEqualTo("11");
  check(convertToBinary(4)).isEqualTo("100");
  check(convertToBinary(5)).isEqualTo("101");
  check(convertToBinary(6)).isEqualTo("110");
  check(convertToBinary(7)).isEqualTo("111");
});

skipTest("can convert a multiple digit decimal number to binary", function () {
  check(convertToBinary(10)).isEqualTo("1010");
  check(convertToBinary(23)).isEqualTo("10111");
  check(convertToBinary(55)).isEqualTo("110111");
});

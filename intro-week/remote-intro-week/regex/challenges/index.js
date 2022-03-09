const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges you are expected to declare your own function with the name and suggested behaviour provided.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
You should look up Regex methods to help you in these challenges :)
Try this link -> https://javascript.info/regexp-introduction#regular-expressions
*/

function extractCode(str) {
  const match = str.match(/\d+/);
  return parseInt(match[0]);
}

runTest("extractCode() can find the total from a single code string", function () {
  check(extractCode("abcd67yuio")).isEqualTo(67);
  check(extractCode("abcd103yuio")).isEqualTo(103);
  check(extractCode("abcd4567yuio")).isEqualTo(4567);
  check(extractCode("abcd1000289yuio")).isEqualTo(1000289);
});

function isValidSortCode(str) {
  return /^\d{2}-\d{2}-\d{2}$/.test(str);
}

runTest("isValidSortCode() should check is a sort code string is in the correct format", function () {
  check(isValidSortCode("10-34-67")).isEqualTo(true);
  check(isValidSortCode("51-34-58")).isEqualTo(true);
  check(isValidSortCode("85-16-23")).isEqualTo(true);

  check(isValidSortCode("51-349-67")).isEqualTo(false);
  check(isValidSortCode("7980-34-67")).isEqualTo(false);
  check(isValidSortCode("34-12-899")).isEqualTo(false);
  check(isValidSortCode("a8-78-10")).isEqualTo(false);
  check(isValidSortCode("45_78_10")).isEqualTo(false);
});

function isProfessionalEmail(str) {
  return !/[x|X]$/.test(str);
}

runTest("isProfessionalEmail() checks if an email ends with an x", function () {
  check(isProfessionalEmail("x")).isEqualTo(false);
  check(isProfessionalEmail("Dear Sir/Madam")).isEqualTo(true);
  check(isProfessionalEmail("Dear Alex, How are you?")).isEqualTo(true);
  check(isProfessionalEmail("i miss u xx")).isEqualTo(false);
  check(isProfessionalEmail("X_X")).isEqualTo(false);
});

function countVowels(str) {
  const matched = str.match(/[aeiou]/gi);
  return matched !== null ? matched.length : 0;
}

runTest("countVowels() counts the vowels in a string", function () {
  check(countVowels("")).isEqualTo(0);
  check(countVowels("bcd")).isEqualTo(0);
  check(countVowels("a")).isEqualTo(1);
  check(countVowels("abc")).isEqualTo(1);
  check(countVowels("AEbiO")).isEqualTo(4);
  check(countVowels("aaeee!!!")).isEqualTo(5);
});

function sumNums(str) {
  const matched = str.match(/\d+/g);
  if (matched !== null) {
    const numbers = matched.map((num) => parseInt(num));
    const sum = numbers.reduce((a, b) => {
      return a + b;
    });
    return sum;
  }
  return 0;
}

runTest("sumNums() totals all of the numbers in a string", function () {
  check(sumNums("hello")).isEqualTo(0);
  check(sumNums("1")).isEqualTo(1);
  check(sumNums("12")).isEqualTo(12);
  check(sumNums("1hello2")).isEqualTo(3);
  check(sumNums("12hiya!3")).isEqualTo(15);
});

function testExact2ConsecutiveLs(str) {
  const match = str.match(/ll/g);
  if (match === null) {
    return false;
  }
  return match.length === 1 ? true : false;
}

runTest("testExact2ConsecutiveLs()", function () {
  check(testExact2ConsecutiveLs("ll")).isEqualTo(true);
  check(testExact2ConsecutiveLs("hello")).isEqualTo(true);
  check(testExact2ConsecutiveLs("bells")).isEqualTo(true);
  check(testExact2ConsecutiveLs("bellows")).isEqualTo(true);
  check(testExact2ConsecutiveLs("aaaallasdows")).isEqualTo(true);
  check(testExact2ConsecutiveLs("llama")).isEqualTo(true);
  check(testExact2ConsecutiveLs("well")).isEqualTo(true);

  check(testExact2ConsecutiveLs("mile")).isEqualTo(false);
  check(testExact2ConsecutiveLs("fly")).isEqualTo(false);
  check(testExact2ConsecutiveLs("wellll")).isEqualTo(false);
  check(testExact2ConsecutiveLs("mitchelllloyd")).isEqualTo(false);
  check(testExact2ConsecutiveLs("l")).isEqualTo(false);
});

const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For each of these tests replace the variable YOUR_REGEX_HERE with a regular expression in order to make each function pass the tests.
e.g.  return YOUR_REGEX_HERE.test(str); becomes -> return /abc/.test(str);
*/

function testCat(str) {
  return /cat/.test(str);
}

runTest("testCat()", function () {
  check(testCat("cat")).isEqualTo(true);
  check(testCat("asdcatas")).isEqualTo(true);
  check(testCat("cat11234")).isEqualTo(true);
  check(testCat("asdcat!")).isEqualTo(true);
  check(testCat("36237cat")).isEqualTo(true);

  check(testCat("ca123")).isEqualTo(false);
  check(testCat("atasdads")).isEqualTo(false);
  check(testCat("caasdlkj")).isEqualTo(false);
  check(testCat("12123ca234")).isEqualTo(false);
});

function testAtLeast5Digits(str) {
  return /[1-9]{5,}/.test(str);
}

runTest("testAtLeast5Digits()", function () {
  check(testAtLeast5Digits("12345")).isEqualTo(true);
  check(testAtLeast5Digits("56783")).isEqualTo(true);
  check(testAtLeast5Digits("98764")).isEqualTo(true);
  check(testAtLeast5Digits("13837")).isEqualTo(true);
  check(testAtLeast5Digits("45613837")).isEqualTo(true);
  check(testAtLeast5Digits("abc13837def")).isEqualTo(true);
  check(testAtLeast5Digits("00abcg77777")).isEqualTo(true);
  check(testAtLeast5Digits("13837!f")).isEqualTo(true);

  check(testAtLeast5Digits("123")).isEqualTo(false);
  check(testAtLeast5Digits("12308")).isEqualTo(false);
  check(testAtLeast5Digits("1234")).isEqualTo(false);
  check(testAtLeast5Digits("addc6826asd")).isEqualTo(false);
});

function testStartsWithExclamationMarks(str) {
  return /^!+/.test(str);
}

runTest("testStartsWithExclamationMarks()", function () {
  check(testStartsWithExclamationMarks("!!!sdlasjdlajsd")).isEqualTo(true);
  check(testStartsWithExclamationMarks("!!askjaa")).isEqualTo(true);
  check(testStartsWithExclamationMarks("!!!!!adjaksljd")).isEqualTo(true);
  check(testStartsWithExclamationMarks("!!!32749anks")).isEqualTo(true);
  check(testStartsWithExclamationMarks("!abc")).isEqualTo(true);

  check(testStartsWithExclamationMarks("adssdk!!!")).isEqualTo(false);
  check(testStartsWithExclamationMarks("asdk;alk!!!!")).isEqualTo(false);
  check(testStartsWithExclamationMarks("errui!!!!")).isEqualTo(false);
  check(testStartsWithExclamationMarks("cjljad!!!!!!")).isEqualTo(false);
});

function testExact6ABCs(str) {
  return /^[a-c]{6}$/.test(str);
}

runTest("testExact6ABCs()", function () {
  check(testExact6ABCs("abcabc")).isEqualTo(true);
  check(testExact6ABCs("cbabac")).isEqualTo(true);
  check(testExact6ABCs("cacaca")).isEqualTo(true);
  check(testExact6ABCs("bbbcca")).isEqualTo(true);

  check(testExact6ABCs("xyzxyz")).isEqualTo(false);
  check(testExact6ABCs("pqrsqp")).isEqualTo(false);
  check(testExact6ABCs("pprrss")).isEqualTo(false);
  check(testExact6ABCs("vsxprh")).isEqualTo(false);
  check(testExact6ABCs("abcabca")).isEqualTo(false);
  check(testExact6ABCs("abca")).isEqualTo(false);
});

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var YOUR_REGEX_HERE;

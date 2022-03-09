const { check, runTest, skipTest } = require("../../test-api");

function tallyLetters(str) {
  if (str.length === 0) return {};
  const split = str.split("");
  const charObj = {};
  for (const char of split) {
    if (charObj.hasOwnProperty(char)) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }
  return charObj;
}

console.log("tallyLetters()");

runTest("returns {} when passed empty string", function () {
  check(tallyLetters("")).isEqualTo({});
});

runTest("can tally a single character string", function () {
  check(tallyLetters("a")).isEqualTo({ a: 1 });
  check(tallyLetters("c")).isEqualTo({ c: 1 });
  check(tallyLetters("z")).isEqualTo({ z: 1 });
});

runTest("can tally a duplicated character string", function () {
  check(tallyLetters("aaa")).isEqualTo({ a: 3 });
  check(tallyLetters("cc")).isEqualTo({ c: 2 });
  check(tallyLetters("zzzzzz")).isEqualTo({ z: 6 });
});

runTest("can tally a multiple distinct character string", function () {
  check(tallyLetters("abc")).isEqualTo({ a: 1, b: 1, c: 1 });
  check(tallyLetters("acc")).isEqualTo({ a: 1, c: 2 });
  check(tallyLetters("zzzzzzdde")).isEqualTo({ z: 6, d: 2, e: 1 });
});

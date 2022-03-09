const { check, runTest, skipTest } = require("../../test-api");

function getWordLengths(str) {
  if (str.length === 0) return [];
  const strArray = str.split(" ");
  const wordLengths = strArray.map((word) => {
    return word.length;
  });
  return wordLengths;
}

console.log("getWordLengths()");

runTest("returns [] when passed an empty string", function () {
  check(getWordLengths("")).isEqualTo([]);
});

runTest("returns an array containing the length of a single word", function () {
  check(getWordLengths("woooo")).isEqualTo([5]);
});

runTest("returns the lengths when passed multiple words", function () {
  check(getWordLengths("hello world")).isEqualTo([5, 5]);
});

runTest("returns lengths for longer sentences", function () {
  check(getWordLengths("like a bridge over troubled water")).isEqualTo([4, 1, 6, 4, 8, 5]);
});

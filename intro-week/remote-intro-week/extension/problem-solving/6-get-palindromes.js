const { check, runTest, skipTest } = require("../../test-api");

function getPalindromes(words) {
  if (words.length === 0) return [];
  const palindromes = [];
  let count = 0;
  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[word.length - 1 - i]) {
        if (++count === word.length) palindromes.push(word);
      }
    }
    count = 0;
  }
  return palindromes;
}

console.log("getPalindromes()");

runTest("returns [] when passed []", function () {
  check(getPalindromes([])).isEqualTo([]);
});

runTest("identifies palindromes", function () {
  check(getPalindromes(["racecar"])).isEqualTo(["racecar"]);
  check(getPalindromes(["racecar", "racecar"])).isEqualTo(["racecar", "racecar"]);
});

runTest("ignores non-palindromes", function () {
  check(getPalindromes(["racecar", "kayak", "tacocat"])).isEqualTo(["racecar", "kayak", "tacocat"]);
  check(getPalindromes(["pineapple", "pony", "racecar"])).isEqualTo(["racecar"]);
});

runTest("returns [] when passed no palindromes", function () {
  check(getPalindromes(["pineapple", "watermelon", "pony"])).isEqualTo([]);
});

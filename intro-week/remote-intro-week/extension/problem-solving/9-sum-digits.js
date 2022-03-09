const { check, runTest, skipTest } = require("../../test-api");

// declare sumDigits here
function sumDigits(str) {
  let total = 0;
  const numbers = str.split("").filter((char) => {
    if (char.match(/[0-9]/)) {
      return char;
    }
  });
  for (const num of numbers) {
    total += parseInt(num);
  }
  return total;
}

console.log("sumDigits");

runTest("picks out a digit from a string and returns", function () {
  check(sumDigits("foo5foo")).isEqualTo(5);
});
runTest("sums multiple digits from a string", function () {
  check(sumDigits("5foo5foo")).isEqualTo(10);
});
runTest("returns a sum of several digits in a string", function () {
  check(sumDigits("hello1world5this3is2a2string")).isEqualTo(13);
});
runTest("treats consecutive digits as individual numbers", function () {
  check(sumDigits("he110world")).isEqualTo(2);
});

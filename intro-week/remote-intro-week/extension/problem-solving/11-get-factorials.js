const { check, runTest, skipTest } = require("../../test-api");

// declare getFactorials here
function getFactorials(nums) {
  function getFactorial(number) {
    let count = 0;
    if (number === 0) {
      return 1;
    } else {
      count += number * getFactorial(number - 1);
      return count;
    }
  }
  const complete = [];
  for (number of nums) {
    const answer = getFactorial(number);
    complete.push(answer);
  }
  return complete;
}

console.log("getFactorials");

runTest("returns [] when passed []", function () {
  check(getFactorials([])).isEqualTo([]);
});
runTest("returns one factorial", function () {
  check(getFactorials([3])).isEqualTo([6]);
});
runTest("returns multiple factorials", function () {
  check(getFactorials([3, 4, 5])).isEqualTo([6, 24, 120]);
});
runTest("returns large factorials", function () {
  check(getFactorials([3, 8, 9, 10])).isEqualTo([6, 40320, 362880, 3628800]);
});

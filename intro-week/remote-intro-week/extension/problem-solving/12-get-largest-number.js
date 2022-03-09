const { check, runTest, skipTest } = require("../../test-api");

// declare getLargestNumber here
function getLargestNumber(num) {
  if (num < 10) {
    return num;
  }
  const split = num.toString().split("");
  const sort = split.sort((a, b) => {
    return a - b;
  });
  const reverse = sort.reverse();
  return parseInt(reverse.join(""));
}

console.log("getLargestNumber");

runTest("if passed a single-digit number then returns that number", function () {
  check(getLargestNumber(9)).isEqualTo(9);
  check(getLargestNumber(0)).isEqualTo(0);
  check(getLargestNumber(1)).isEqualTo(1);
});
runTest("if passed a 2-digit number then does nothing if they are in descending order", function () {
  check(getLargestNumber(43)).isEqualTo(43);
  check(getLargestNumber(81)).isEqualTo(81);
  check(getLargestNumber(21)).isEqualTo(21);
  check(getLargestNumber(20)).isEqualTo(20);
});
runTest("if passed a 2-digit number then swaps the numbers if they are are in ascending order", function () {
  check(getLargestNumber(19)).isEqualTo(91);
  check(getLargestNumber(23)).isEqualTo(32);
  check(getLargestNumber(35)).isEqualTo(53);
});
runTest("if passed a 3-digit number then returns the correctly ordered number", function () {
  check(getLargestNumber(473)).isEqualTo(743);
  check(getLargestNumber(850)).isEqualTo(850);
  check(getLargestNumber(801)).isEqualTo(810);
  check(getLargestNumber(100)).isEqualTo(100);
  check(getLargestNumber(219)).isEqualTo(921);
  check(getLargestNumber(581)).isEqualTo(851);
});
runTest("returns correctly ordered number for large numbers including those with many trailing zeros", function () {
  check(getLargestNumber(12345)).isEqualTo(54321);
  check(getLargestNumber(12345000)).isEqualTo(54321000);
  check(getLargestNumber(1010100)).isEqualTo(1110000);
  check(getLargestNumber(89382291)).isEqualTo(99883221);
  check(getLargestNumber(8001009100)).isEqualTo(9811000000);
});

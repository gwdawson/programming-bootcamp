const { check, runTest } = require("../../test-api");

const items = [];

for (let i = 42; i >= 3; i--) {
  items.push(i);
}

runTest("check numbers starting at 42 and descending to 3 are pushed into an array", function () {
  check(items).isEqualTo([
    42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14,
    13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3,
  ]);
});

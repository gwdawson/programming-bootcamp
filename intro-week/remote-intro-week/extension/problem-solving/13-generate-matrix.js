const { check, runTest, skipTest } = require("../../test-api");

// declare generateMatrix here
function generateMatrix(n) {
  const outerArray = [];
  const innerArray = [];
  for (let i = n; i > 0; i--) {
    innerArray.push(null);
    outerArray.push(innerArray);
  }
  return outerArray;
}

console.log("generateMatrix");

runTest("returns [[null]] when passed 1", function () {
  check(generateMatrix(1)).isEqualTo([[null]]);
});
runTest("returns a 2*2 matrix of null entries when passed 2", function () {
  check(generateMatrix(2)).isEqualTo([
    [null, null],
    [null, null],
  ]);
});
runTest("returns a 3*3 matrix of null entries when passed 3", function () {
  check(generateMatrix(3)).isEqualTo([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
});

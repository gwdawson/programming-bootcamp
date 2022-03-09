const { check, runTest, skipTest } = require("../../test-api");

function flipBooleans(booleans) {
  if (booleans.length === 0) return [];
  const mapped = booleans.map((bool) => {
    if (bool === true) return false;
    if (bool === false) return true;
  });
  return mapped;
}

console.log("flipBooleans()");
runTest("returns an empty array when passed []", function () {
  check(flipBooleans([])).isEqualTo([]);
});

runTest("inverts all booleans in the array", function () {
  check(flipBooleans([true, true, true])).isEqualTo([false, false, false]);
  check(flipBooleans([false, true, true])).isEqualTo([true, false, false]);
  check(flipBooleans([false, false, false])).isEqualTo([true, true, true]);
});

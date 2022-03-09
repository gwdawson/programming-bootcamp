const { check, runTest, skipTest } = require("../../test-api");

// declare getWilliams here
function getWilliams(arr) {
  const williams = arr.filter((user) => {
    if (user.split(" ")[1] === "Williams") {
      return user;
    }
  });
  return williams;
}

console.log("getWilliams");

runTest("returns [] when passed []", function () {
  check(getWilliams([])).isEqualTo([]);
});
runTest("returns a Williams from a mixed array", function () {
  check(getWilliams(["Harry Williams", "Charlotte Bank"])).isEqualTo(["Harry Williams"]);
});
runTest("returns multiple Williams from a mixed array", function () {
  check(getWilliams(["Harry Williams", "Charlotte Williams"])).isEqualTo(["Harry Williams", "Charlotte Williams"]);
});
runTest("ignores Williams found in first names", function () {
  check(getWilliams(["William Jones", "Harry Williams"])).isEqualTo(["Harry Williams"]);
});
runTest("ignores Williams found in extended last names", function () {
  check(getWilliams(["John Williams", "Chris Williamson"])).isEqualTo(["John Williams"]);
});

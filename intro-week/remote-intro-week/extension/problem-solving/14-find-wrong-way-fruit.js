const { check, runTest, skipTest } = require("../../test-api");

// declare findWrongWayFruit here
function findWrongWayFruit(orchard) {
  if (orchard.length < 3) {
    return 0;
  }
  let reversed = "";
  if (orchard[0] === orchard[orchard.length - 1]) {
    reversed = orchard[0].split("").reverse().join("");
  } else {
    reversed = orchard[1].split("").reverse().join("");
  }
  return orchard.indexOf(reversed);
}

console.log("findWrongWayFruit");

runTest("returns 0 when passed an array length smaller than 3", function () {
  check(findWrongWayFruit(["apple"])).isEqualTo(0);
  check(findWrongWayFruit(["elppa", "apple"])).isEqualTo(0);
});
runTest("returns the correct index when the wrong-way fruit is in the middle of the array", function () {
  check(findWrongWayFruit(["apple", "apple", "apple", "apple", "elppa", "apple"])).isEqualTo(4);
});
runTest("returns the correct index when the wrong-way fruit is at start", function () {
  check(findWrongWayFruit(["elppa", "apple", "apple", "apple", "apple", "apple"])).isEqualTo(0);
});
runTest("returns the correct index when the wrong-way fruit is at the end", function () {
  check(findWrongWayFruit(["apple", "apple", "apple", "apple", "apple", "elppa"])).isEqualTo(5);
});
runTest("returns the correct index when the wrong-way fruit is at any other random position", function () {
  check(findWrongWayFruit(["orange", "orange", "orange", "orange", "orange", "egnaro"])).isEqualTo(5);
  check(findWrongWayFruit(["banana", "ananab", "banana", "banana", "banana", "banana"])).isEqualTo(1);
  check(findWrongWayFruit(["eparg", "grape", "grape", "grape", "grape", "grape"])).isEqualTo(0);
  check(findWrongWayFruit(["tomato", "tomato", "tomato", "tomato", "otamot", "tomato"])).isEqualTo(4);
  check(findWrongWayFruit(["cucumber", "cucumber", "rebmucuc", "cucumber", "cucumber", "cucumber"])).isEqualTo(2);
});

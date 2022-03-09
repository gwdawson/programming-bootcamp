const { check, runTest } = require("../../test-api");

const alternatingChars = [];

for (let i = 0; i < 8; i++) {
  i % 2 === 0 ? alternatingChars.push("x") : alternatingChars.push("o");
}

runTest("can push alternating characters into an array", function () {
  check(alternatingChars).isEqualTo(["x", "o", "x", "o", "x", "o", "x", "o"]);
});

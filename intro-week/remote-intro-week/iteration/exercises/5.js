const { check, runTest } = require("../../test-api");

let total = 0;

for (let i = 0; i <= 50; i++) {
  total += i;
}

runTest("calculate the sum of several numbers using a loop", function () {
  check(total).isEqualTo(1275);
});

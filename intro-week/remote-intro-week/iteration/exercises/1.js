const { check, runTest } = require("../../test-api");

const items = [];

for (let i = 0; i <= 14; i += 2) {
  items.push(i);
}

runTest("check the even numbers 0 to 14 are pushed into items", function () {
  check(items).isEqualTo([0, 2, 4, 6, 8, 10, 12, 14]);
});

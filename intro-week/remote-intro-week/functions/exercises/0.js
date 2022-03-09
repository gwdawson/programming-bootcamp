const { check, runTest } = require("../../test-api");

function double(num) {
  return num * 2;
}

runTest("double() can double any number", function () {
  check(double(11)).isEqualTo(22);
  check(double(129)).isEqualTo(258);
  check(double(25)).isEqualTo(50);
});

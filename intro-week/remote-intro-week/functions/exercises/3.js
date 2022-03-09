const { check, runTest } = require("../../test-api");

function multiply(num1, num2) {
  return num1 * num2;
}

runTest("multiply() can multiply 2 numbers together", function () {
  check(multiply(10, 42)).isEqualTo(420);
  check(multiply(3, 5)).isEqualTo(15);
  check(multiply(-180, 2)).isEqualTo(-360);
});

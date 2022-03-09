const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For each of these tests replace the variable FILL_ME_IN with a value to make the test pass.
Each of the checks expects the value in the left hand brackets to evaluate to the same as the right hand brackets.
e.g.  check(FILL_ME_IN).isEqualTo(2 + 2) becomes -> check(4).isEqualTo(2 + 2)
*/

runTest("checking multiTypeArray", function () {
  const multiTypeArray = ["I am a string", 42, true, [1, 2, 3]];

  check("string").isEqualTo(typeof multiTypeArray[0]);
  check("number").isEqualTo(typeof multiTypeArray[1]);
  check("boolean").isEqualTo(typeof multiTypeArray[2]);
  check("object").isEqualTo(typeof multiTypeArray[3]);
});

runTest("checking alphaSample", function () {
  const alphaSample = ["a", "b", "c"];
  alphaSample.push("d");
  alphaSample.push("g");

  check(["a", "b", "c", "d", "g"]).isEqualTo(alphaSample);

  const lastItem = alphaSample.pop();

  check("g").isEqualTo(lastItem);
  check(["a", "b", "c", "d"]).isEqualTo(alphaSample);
});

runTest("working with nested arrays", function () {
  const rows = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];

  check(["a", "b", "c"]).isEqualTo(rows[0]);
  check(["d", "e", "f"]).isEqualTo(rows[1]);
  check(["g", "h", "i"]).isEqualTo(rows[2]);

  const firstRow = rows[0];
  check(firstRow[0]).isEqualTo("a");
  check(firstRow[1]).isEqualTo("b");

  check(rows[1][1]).isEqualTo("e");
  check(rows[2][0]).isEqualTo("g");
  check(rows[0][2]).isEqualTo("c");
});

runTest("get the slice of an array", function () {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

  check(["b", "c", "d"]).isEqualTo(letters.slice(1, 4));
  check(["c"]).isEqualTo(letters.slice(2, 3));
  check(["d", "e"]).isEqualTo(letters.slice(3, 5));
  check(["n"]).isEqualTo(letters.slice(-1));
  check(["m", "n"]).isEqualTo(letters.slice(-2));
  check(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]).isEqualTo(letters.slice(0, -4));
});

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var FILL_ME_IN;

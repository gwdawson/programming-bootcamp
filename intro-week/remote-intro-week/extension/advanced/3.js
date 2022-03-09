const { check, runTest, skipTest } = require("../../test-api");

/*
createPowerSet()

You will need to implement a function createPowerSet

It will need to return an array of all possible sub-arrays given some starting array

For example,
createPowerSet(['a', 'b', 'c']) should return

[[], ['a'], ['b'], ['c'], ['a', 'b'], ['b', 'c'] ,['a', 'c'], ['a', 'b', 'c'] ]

all the possible sub-arrays that can be constructed from 3 distinct elements
There should be 2**3 = 8 different subsets in total

You will need to write your own tests for this task to prove your function is working correctly
- use the runTest, skipTest functions that are available in this file


*/

runTest("returns an array including empty array when passed an empty array", function () {
  check(createPowerSet([])).isEqualTo([[]]);
});

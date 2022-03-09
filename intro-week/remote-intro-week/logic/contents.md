# Logic Tasks 

Please complete the **challenges** in the logic directory

This file has some “tests” set up that use some functions that we have written, which will log different output depending on whether your code is doing what we have asked, or not.

When you run this file with Node (e.g. `cd logic/challenges` and then `node index.js`) the only tests that will run are those that have `runTest` wrapped around them.

To begin with, it is only the first set that have `runTest` and the others have `skipTest` which it is up to you to replace with `runTest` when you get to writing the relevant bit of code:

```js
const { check, runTest, skipTest } = require("../../../test-api");

function isBiggerThan10(num) {}

runTest("isBiggerThan10() returns a message indicating if a number is bigger than 10", function () {
  // these checks will run!!!
});

function isFalsy(value) {}

skipTest("isFalsy() returns true if a value is falsy and false if it is truthy", function () {
  // these checks will be skipped!!!
});
```

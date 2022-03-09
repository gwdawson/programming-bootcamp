const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function accessObject(obj, key) {
  return obj[key];
}

runTest("accessObject() can access a property value using a key", function () {
  check(accessObject({ name: "jonny", age: 32 }, "name")).isEqualTo("jonny");
  check(accessObject({ name: "jonny", age: 32 }, "age")).isEqualTo(32);
});

function checkIfPropertyExists(obj, key) {
  return obj.hasOwnProperty(key);
}

runTest("checkIfPropertyExists() checks if a property exists inside an object", function () {
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "name")).isEqualTo(true);
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "age")).isEqualTo(true);
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "pets")).isEqualTo(false);
});

function createObject(arr) {
  const key = arr[0];
  const value = arr[1];
  const obj = {};
  obj[key] = value;
  return obj;
}

runTest("createObject() creates a new object from a key value pair", function () {
  check(createObject(["name", "shaq"])).isEqualTo({ name: "shaq" });
  check(createObject(["fruit", "apple"])).isEqualTo({ fruit: "apple" });
  check(createObject(["language", "haskell"])).isEqualTo({ language: "haskell" });
});

function countProperties(obj) {
  return Object.keys(obj).length;
}

runTest("countProperties() counts the number of key-value pairs for a given object", function () {
  check(countProperties({})).isEqualTo(0);
  check(countProperties({ name: "shaq" })).isEqualTo(1);
  check(countProperties({ name: "shaq", job: "tutor", city: "Manchester" })).isEqualTo(3);
});

function createArrow(direction) {
  const compare = {
    left: "←",
    right: "→",
    up: "↑",
    down: "↓",
  };
  return compare[direction];
}

runTest("createArrow() will return an arrow pointing in the right direction", function () {
  check(createArrow("left")).isEqualTo("←");
  check(createArrow("right")).isEqualTo("→");
  check(createArrow("up")).isEqualTo("↑");
  check(createArrow("down")).isEqualTo("↓");
});

function updateVoterAddress(voter, correctHouseNumber) {
  voter.address.houseNumber = correctHouseNumber;
}

runTest("updateVoterAddress() updates the voter's houseNumber", function () {
  const voter = {
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 2,
      street: "Old St",
      city: "Chester",
    },
  };

  updateVoterAddress(voter, 10);

  check(voter).isEqualTo({
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 10,
      street: "Old St",
      city: "Chester",
    },
  });
});

function createUserString(user) {
  return `name: ${user.name}, age: ${user.age}, language: ${user.language}`;
}

runTest("createUserString() will create a message from an details object", function () {
  check(createUserString({ name: "Mitch", age: 30, language: "Javascript" })).isEqualTo(
    "name: Mitch, age: 30, language: Javascript"
  );
  check(createUserString({ name: "Anat", age: 24, language: "Ruby" })).isEqualTo("name: Anat, age: 24, language: Ruby");
});

function updateCoinMachine(coinMachine, coin) {
  coinMachine[coin] += 1;
  return coinMachine;
}

runTest("updateCoinMachine() will create a message from an details object", function () {
  check(updateCoinMachine({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "1p")).isEqualTo({
    "1p": 1,
    "2p": 0,
    "5p": 0,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "2p")).isEqualTo({
    "1p": 0,
    "2p": 1,
    "5p": 0,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 3, "5p": 0, "10p": 0 }, "2p")).isEqualTo({
    "1p": 0,
    "2p": 4,
    "5p": 0,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "5p")).isEqualTo({
    "1p": 0,
    "2p": 3,
    "5p": 11,
    "10p": 0,
  });
  check(updateCoinMachine({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "10p")).isEqualTo(
    { "1p": 0, "2p": 3, "5p": 10, "10p": 1 },
    "5p"
  );
});

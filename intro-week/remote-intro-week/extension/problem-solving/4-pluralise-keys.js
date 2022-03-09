const { check, runTest, skipTest } = require("../../test-api");

function pluraliseKeys(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      const newKey = key + "s";
      obj[newKey] = obj[key];
      delete obj[key];
    }
  }
  return obj;
}

console.log("pluraliseKeys()");

runTest("returns a new object", function () {
  const input = {
    name: "Sam's Pet Shop",
    tagLine: "From Aardvarks to Zebras!",
    pet: [
      { name: "mitch", species: "hamster", price: "£9.99" },
      { name: "jonny", species: "canary", price: "£24.99" },
    ],
  };
  const actual = pluraliseKeys(input);

  check(typeof actual).isEqualTo("object");
});

runTest(
  "returns an object with identical keys to the input when the input's keys do not need pluralising",
  function () {
    const input = {
      name: "Shaq's Taxidermy Shack",
      tagLine: "You Love 'em; We Stuff 'em",
    };
    const actual = pluraliseKeys(input);
    const expected = {
      name: "Shaq's Taxidermy Shack",
      tagLine: "You Love 'em; We Stuff 'em",
    };

    check(actual).isEqualTo(expected);
  }
);

runTest("returns an object with its keys pluralised", function () {
  let input = {
    name: "Paul's Donkey University",
    tagLine: "Too Mule For School",
    student: ["Suneet", "Ant", "Haz"],
  };
  let actual = pluraliseKeys(input);
  let expected = {
    name: "Paul's Donkey University",
    tagLine: "Too Mule For School",
    students: ["Suneet", "Ant", "Haz"],
  };
  check(actual).isEqualTo(expected);

  input = {
    name: "Tom",
    job: ["writing katas", "marking"],
    favouriteShop: ["Paul's Donkey University", "Shaq's Taxidermy Shack", "Sam's Pet Shop"],
  };
  actual = pluraliseKeys(input);
  expected = {
    name: "Tom",
    jobs: ["writing katas", "marking"],
    favouriteShops: ["Paul's Donkey University", "Shaq's Taxidermy Shack", "Sam's Pet Shop"],
  };
  check(actual).isEqualTo(expected);
});

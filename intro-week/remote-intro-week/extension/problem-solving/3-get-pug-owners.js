const { check, runTest, skipTest } = require("../../test-api");

function getPugOwners(dogs) {
  const pugs = [];
  dogs.forEach((dog) => {
    if (dog.breed === "Pug") pugs.push(dog.owner);
  });
  return pugs;
}

console.log("getPugOwners()");

runTest("returns [] when passed []", function () {
  check(getPugOwners([])).isEqualTo([]);
});

runTest("returns an array of pug owners names when passed an array of dog objects", function () {
  const dogs = [
    { name: "Beatrice", breed: "Lurcher", owner: "Tom" },
    { name: "Max", breed: "Pug", owner: "Izzi" },
    { name: "Poppy", breed: "Pug", owner: "Anat" },
  ];
  check(getPugOwners(dogs)).isEqualTo(["Izzi", "Anat"]);

  const dogs2 = [
    { name: "Steven", breed: "Lurcher", owner: "Mitch" },
    { name: "Daphne", breed: "Pug", owner: "Paul" },
    { name: "Sandy", breed: "Labrador", owner: "Paul" },
    { name: "Mike", breed: "Pug", owner: "Shaq" },
    { name: "Spike", breed: "Pug", owner: "Alex" },
  ];
  check(getPugOwners(dogs2)).isEqualTo(["Paul", "Shaq", "Alex"]);

  const dogs3 = [
    { name: "Kevin", breed: "Labrador", owner: "Sam" },
    { name: "Patch", breed: "Rottweiler", owner: "Ant" },
    { name: "Miles", breed: "Lurcher", owner: "Nicki" },
    { name: "Sandy", breed: "Pug", owner: "Vel" },
    { name: "Spot", breed: "Pug", owner: "Haz" },
    { name: "Josephine", breed: "Terrier", owner: "Jonny" },
    { name: "Eric", breed: "Pug", owner: "David" },
  ];
  check(getPugOwners(dogs3)).isEqualTo(["Vel", "Haz", "David"]);
});

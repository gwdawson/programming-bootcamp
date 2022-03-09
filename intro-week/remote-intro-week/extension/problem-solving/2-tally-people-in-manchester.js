const { check, runTest, skipTest } = require("../../test-api");

function tallyPeopleInManchester(people) {
  let count = 0;
  for (const person of people) {
    if (person.lives.city === "Manchester") count++;
  }
  return count;
}

console.log("tallyPeopleInManchester()");

runTest("returns 0 when nobody is from Manchester", function () {
  check(
    tallyPeopleInManchester([
      {
        name: "Maria",
        lives: { country: "Italy", city: "Valencia" },
        age: 32,
      },
      {
        name: "Sandrella",
        lives: { country: "Spain", city: "Bilbao" },
        age: 32.5,
      },
    ])
  ).isEqualTo(0);
});

runTest("returns the length of the array when everyone is from Manchester", function () {
  check(
    tallyPeopleInManchester([
      {
        name: "Alexis",
        lives: { country: "England", city: "Manchester" },
        age: 32.5,
      },
      {
        name: "Raheem",
        lives: { country: "England", city: "Manchester" },
        age: 35.55,
      },
    ])
  ).isEqualTo(2);
});

runTest(
  "returns the number of people who are actually from the proud, yet fairly miserable, city of Manchester",
  function () {
    check(
      tallyPeopleInManchester([
        {
          name: "Melissandra",
          lives: { country: "Spain", city: "Valencia" },
          age: 55.5,
        },
        {
          name: "Melissandrella",
          lives: { country: "Spain", city: "Valencia" },
          age: 55.555,
        },
        {
          name: "Emmeline",
          lives: { country: "England", city: "Manchester" },
          age: 25,
        },
      ])
    ).isEqualTo(1);

    check(
      tallyPeopleInManchester([
        {
          name: "Frank",
          lives: { country: "England", city: "Manchester" },
          age: 15.2,
        },
        {
          name: "Bob",
          lives: { country: "Wales", city: "Abertillery" },
          age: 555555555555.555,
        },
        {
          name: "Terry",
          lives: { country: "England", city: "Newport Pagnell" },
          age: 0.00000002,
        },
      ])
    ).isEqualTo(1);
  }
);

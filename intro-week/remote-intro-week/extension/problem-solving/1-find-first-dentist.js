const { check, runTest, skipTest } = require("../../test-api");

function findFirstDentist(people) {
  if (people.length === 0) return null;
  for (const obj of people) {
    if (obj.isDentist === true) return obj;
  }
}

console.log("findFirstDentist()");

runTest("returns null if no dentist is in the array", function () {
  check(findFirstDentist([])).isEqualTo(null);
});

runTest("returns a person object who is a dentist", function () {
  const dentists = [{ name: "Orin Scrivello", isDentist: true }];

  check(findFirstDentist(dentists).isDentist).isEqualTo(true);
  check(findFirstDentist(dentists).name).isEqualTo("Orin Scrivello");
});

runTest("returns the first dentist from the array", function () {
  const dentists = [
    { name: "Johnny Karate", isDentist: false },
    { name: "Lucy Hobbs Taylor", isDentist: true },
    { name: "Pierre Fauchard", isDentist: true },
    { name: "Bert Macklin", isDentist: false },
    { name: "Orin Scrivello", isDentist: true },
    { name: "Kip Hackman", isDentist: false },
  ];
  check(findFirstDentist(dentists)).isEqualTo({
    name: "Lucy Hobbs Taylor",
    isDentist: true,
  });
});

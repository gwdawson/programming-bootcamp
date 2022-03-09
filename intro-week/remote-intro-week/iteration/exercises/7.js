const { check, runTest } = require("../../test-api");

const tutors = ["Anat", "Paul C", "Paul R", "Jonny", "Mitch", "Vel", "Alex", "Ant"];
const tutorsAndIndex = [];

for (let i = 0; i < tutors.length; i++) {
  tutorsAndIndex.push(`${i} : ${tutors[i]}`);
}

runTest("can add an index and a tutor's name into an array", function () {
  check(tutorsAndIndex).isEqualTo([
    "0 : Anat",
    "1 : Paul C",
    "2 : Paul R",
    "3 : Jonny",
    "4 : Mitch",
    "5 : Vel",
    "6 : Alex",
    "7 : Ant",
  ]);
});

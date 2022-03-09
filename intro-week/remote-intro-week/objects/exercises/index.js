const { runTest, skipTest, check } = require("../../test-api");

runTest("Task 1", function () {
  const myObject = {};

  check("object").isEqualTo(typeof myObject);
});

runTest("Task 2", function () {
  const father = {
    firstName: "Michael",
    lastName: "Bluth",
    age: 33,
  };

  check("Michael").isEqualTo(father.firstName);
  check("Bluth").isEqualTo(father.lastName);
  check(undefined).isEqualTo(father.firstname);
  check(33).isEqualTo(father.age);
});

runTest("Task 3", function () {
  const son = {};
  son.name = "George Michael";
  son.lastname = "Bluth";
  son.age = 16;
  son.jobs = ["Frozen Banana Salesman", "CEO of Fakeblock"];

  check("George Michael").isEqualTo(son.name);
  check("object").isEqualTo(typeof son.jobs);
  check("f").isEqualTo(son.jobs[1][5]);
});

runTest("Task 4", function () {
  const starWars = {
    episode4: "A New Hope",
    episode5: "Empire Strikes Back",
    episode6: "Return of the Jedi",
    episode7: "The Force Awakens",
  };
  const worstOne = starWars["episode" + (10 - 4)];

  check("Return of the Jedi").isEqualTo(worstOne);
  check(starWars["episode7"]).isEqualTo("The Force Awakens");
});

runTest("Task 5", function () {
  const brotherInLaw = {
    name: "Tobias",
    lastname: "Funke",
    job: "therapist",
  };

  check("therapist").isEqualTo(brotherInLaw.job);
  brotherInLaw.job = "actor";
  check("actor").isEqualTo(brotherInLaw.job);

  delete brotherInLaw.job;
  check(undefined).isEqualTo(brotherInLaw.job);
});

runTest("Task 6", function () {
  const bluthFamily = {
    father: {
      name: "George",
    },
    mother: {
      name: "Lucille",
    },
    sons: [{ name: "GOB" }, { name: "Michael" }, { name: "Buster" }],
    daughters: [{ name: "Lindsay" }],
  };

  check("George").isEqualTo(bluthFamily.father.name);
  check(bluthFamily.mother.name).isEqualTo("Lucille");
  check(bluthFamily.daughters[0].name).isEqualTo("Lindsay");
});

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var FILL_ME_IN;

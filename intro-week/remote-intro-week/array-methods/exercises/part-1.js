const { check, runTest, skipTest } = require("../../test-api");

runTest("get the multiples of 10 from 10 to 100", function () {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const multiplesOf10 = items.map((num) => {
    return num * 10;
  });

  check(multiplesOf10).isEqualTo([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
});

runTest("adds ? to the words in order to form queries", function () {
  const words = ["who", "what", "why", "how", "huh"];

  const queries = words.map((word) => {
    return word + "?";
  });

  check(queries).isEqualTo(["who?", "what?", "why?", "how?", "huh?"]);
});

runTest("will get the name and ages of each person in an array", function () {
  const people = [
    { name: "mitch", age: 30 },
    { name: "anat", age: 24 },
    { name: "howard", age: 58 },
  ];

  const namesAndAges = people.map((obj) => {
    return `${obj.name} - ${obj.age}`;
  });

  check(namesAndAges).isEqualTo(["mitch - 30", "anat - 24", "howard - 58"]);
});

runTest("can get the multiples of 3", function () {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const multiplesOf3 = nums.filter((num) => {
    if (num % 3 === 0) {
      return num;
    }
  });

  check(multiplesOf3).isEqualTo([3, 6, 9, 12, 15, 18]);
});

runTest("can get all the words ending in er", function () {
  const words = ["boulder", "wonder", "hello", "hi", "super", "something", "whoa", "booo", "horror"];

  const wordsEndingInEr = words.filter((word) => {
    if (word.endsWith("er")) {
      return word;
    }
  });

  check(wordsEndingInEr).isEqualTo(["boulder", "wonder", "super"]);
});

runTest("can get the names of staff over 28", function () {
  const staff = [
    { name: "Anat", age: 22 },
    { name: "Paul C", age: 31 },
    { name: "Paul R", age: 27 },
    { name: "Vel", age: 29 },
    { name: "Sam", age: 30 },
    { name: "Jonny", age: 32 },
    { name: "Ant", age: 26 },
    { name: "Mitch", age: 28 },
    { name: "Tom", age: 24 },
    { name: "Alex", age: 24 },
  ];

  const staffOver28 = staff.filter((obj) => {
    if (obj.age > 28) {
      return obj;
    }
  });

  const namesOfStaffOver28 = staffOver28.map((obj) => {
    return obj.name;
  });

  check(namesOfStaffOver28).isEqualTo(["Paul C", "Vel", "Sam", "Jonny"]);
});

runTest("can sum numbers in a list using forEach()", function () {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let sum = 0;

  nums.forEach((num) => {
    sum += num;
  });

  check(sum).isEqualTo(120);
});

runTest("can find the index position of X", function () {
  const treasureMap = "adhfashasoasduyoaisyioyadiyfoXsasdiyoiaysidyoiaysfi";

  const positionOfX = treasureMap.split("").indexOf("X");

  check(positionOfX).isEqualTo(29);
});

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var USE_ARRAY_METHOD;

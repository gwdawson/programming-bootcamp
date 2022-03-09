const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function isBiggerThan10(num) {
  let smallerOrLarger = "";
  if (num === 10) {
    smallerOrLarger = "equal to";
  } else if (num > 10) {
    smallerOrLarger = "more than";
  } else if (num < 10) {
    smallerOrLarger = "less than";
  }
  return `Number ${num} is ${smallerOrLarger} 10`;
}

runTest("isBiggerThan10() returns a message indicating if a number is bigger than 10", function () {
  check(isBiggerThan10(3)).isEqualTo("Number 3 is less than 10");
  check(isBiggerThan10(4)).isEqualTo("Number 4 is less than 10");
  check(isBiggerThan10(5)).isEqualTo("Number 5 is less than 10");
  check(isBiggerThan10(10)).isEqualTo("Number 10 is equal to 10");
  check(isBiggerThan10(11)).isEqualTo("Number 11 is more than 10");
  check(isBiggerThan10(100)).isEqualTo("Number 100 is more than 10");
});

function isFalsy(value) {
  return value ? false : true;
}

runTest("isFalsy() returns true if a value is falsy and false if it is truthy", function () {
  check(isFalsy(false)).isEqualTo(true);
  check(isFalsy("")).isEqualTo(true);
  check(isFalsy(0)).isEqualTo(true);
  check(isFalsy(NaN)).isEqualTo(true);
  check(isFalsy(undefined)).isEqualTo(true);
  check(isFalsy(null)).isEqualTo(true);
  check(isFalsy(true)).isEqualTo(false);
});

function readTrafficLight(lightColour) {
  let status = "";
  if (lightColour.toLowerCase() === "green") {
    status = "GO!";
  } else if (lightColour.toLowerCase() === "amber") {
    status = "GET READY...";
  } else if (lightColour.toLowerCase() === "red") {
    status = "STOP!";
  }
  return status;
}

runTest("readTrafficLight() should print a message according to the different colour passed in", function () {
  check(readTrafficLight("green")).isEqualTo("GO!");
  check(readTrafficLight("GREEN")).isEqualTo("GO!");

  check(readTrafficLight("amber")).isEqualTo("GET READY...");
  check(readTrafficLight("AMBER")).isEqualTo("GET READY...");

  check(readTrafficLight("red")).isEqualTo("STOP!");
  check(readTrafficLight("RED")).isEqualTo("STOP!");
});

function isMultipleOf6(num) {
  return num % 6 === 0;
}

runTest("isMultipleOf6() should check if a number is divisible by 6", function () {
  check(isMultipleOf6(6)).isEqualTo(true);
  check(isMultipleOf6(10)).isEqualTo(false);
  check(isMultipleOf6(15)).isEqualTo(false);
  check(isMultipleOf6(36)).isEqualTo(true);
  check(isMultipleOf6(60)).isEqualTo(true);
  check(isMultipleOf6(61)).isEqualTo(false);
});

function checkInfinitive(word) {
  let infinitive = null;
  if (word.endsWith("re")) {
    infinitive = true;
  } else if (word.endsWith("ir")) {
    infinitive = true;
  } else if (word.endsWith("er")) {
    infinitive = true;
  } else {
    infinitive = false;
  }
  return infinitive;
}

runTest("checkInfinitive() checks if a french word is an infinitive", function () {
  check(checkInfinitive("manger")).isEqualTo(true);
  check(checkInfinitive("faire")).isEqualTo(true);
  check(checkInfinitive("aller")).isEqualTo(true);
  check(checkInfinitive("finir")).isEqualTo(true);
  check(checkInfinitive("rendre")).isEqualTo(true);
  check(checkInfinitive("savoir")).isEqualTo(true);

  check(checkInfinitive("suis")).isEqualTo(false);
  check(checkInfinitive("ai")).isEqualTo(false);
  check(checkInfinitive("ete")).isEqualTo(false);
  check(checkInfinitive("sais")).isEqualTo(false);
  check(checkInfinitive("allons")).isEqualTo(false);
});

function checkGame(diceRoll, coinToss) {
  winOrLose = null;
  if (diceRoll >= 3 && coinToss === "H") {
    winOrLose = true;
  } else {
    winOrLose = false;
  }
  return winOrLose;
}

runTest("checkGame() should check if a user was won the game", function () {
  check(checkGame(3, "H")).isEqualTo(true);
  check(checkGame(4, "H")).isEqualTo(true);
  check(checkGame(5, "H")).isEqualTo(true);
  check(checkGame(6, "H")).isEqualTo(true);
  check(checkGame(6, "T")).isEqualTo(false);
});

function checkBatteryLevel(batteryLevel) {
  let string = "";
  if (batteryLevel <= 5) {
    string = `Warning - battery level low: ${batteryLevel}%, please charge your device`;
  } else if (batteryLevel > 5 && batteryLevel < 100) {
    string = `Battery level: ${batteryLevel}%`;
  } else if (batteryLevel === 100) {
    string = "Fully charged :)";
  }
  return string;
}

runTest("checkBatteryLevel() should return a message with info about the battery level", function () {
  check(checkBatteryLevel(100)).isEqualTo("Fully charged :)");

  check(checkBatteryLevel(99)).isEqualTo("Battery level: 99%");
  check(checkBatteryLevel(80)).isEqualTo("Battery level: 80%");
  check(checkBatteryLevel(30)).isEqualTo("Battery level: 30%");
  check(checkBatteryLevel(10)).isEqualTo("Battery level: 10%");
  check(checkBatteryLevel(6)).isEqualTo("Battery level: 6%");

  check(checkBatteryLevel(5)).isEqualTo("Warning - battery level low: 5%, please charge your device");
  check(checkBatteryLevel(4)).isEqualTo("Warning - battery level low: 4%, please charge your device");
  check(checkBatteryLevel(3)).isEqualTo("Warning - battery level low: 3%, please charge your device");
  check(checkBatteryLevel(1)).isEqualTo("Warning - battery level low: 1%, please charge your device");
});

function getOrdinalSuffix(num) {
  const numStr = "" + num;
  if (numStr.slice(-2) === "11") {
    return "th";
  } else if (numStr.slice(-2) === "12") {
    return "th";
  } else if (numStr.slice(-2) === "13") {
    return "th";
  } else if (numStr.slice(-1) === "1") {
    return "st";
  } else if (numStr.slice(-1) === "2") {
    return "nd";
  } else if (numStr.slice(-1) === "3") {
    return "rd";
  }
  return "th";
}

runTest("getOrdinalSuffix() should give the correct ordinal suffix for a number", function () {
  check(getOrdinalSuffix(1)).isEqualTo("st");
  check(getOrdinalSuffix(2)).isEqualTo("nd");
  check(getOrdinalSuffix(3)).isEqualTo("rd");
  check(getOrdinalSuffix(4)).isEqualTo("th");
  check(getOrdinalSuffix(5)).isEqualTo("th");
  check(getOrdinalSuffix(10)).isEqualTo("th");
  check(getOrdinalSuffix(11)).isEqualTo("th");
  check(getOrdinalSuffix(12)).isEqualTo("th");
  check(getOrdinalSuffix(13)).isEqualTo("th");
  check(getOrdinalSuffix(14)).isEqualTo("th");
  check(getOrdinalSuffix(15)).isEqualTo("th");
  check(getOrdinalSuffix(16)).isEqualTo("th");
  check(getOrdinalSuffix(17)).isEqualTo("th");
  check(getOrdinalSuffix(18)).isEqualTo("th");
  check(getOrdinalSuffix(19)).isEqualTo("th");
  check(getOrdinalSuffix(20)).isEqualTo("th");
  check(getOrdinalSuffix(21)).isEqualTo("st");
  check(getOrdinalSuffix(22)).isEqualTo("nd");
  check(getOrdinalSuffix(23)).isEqualTo("rd");
  check(getOrdinalSuffix(32)).isEqualTo("nd");
});

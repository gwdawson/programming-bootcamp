const { check, runTest } = require("../../test-api");

const sounds = ["fizz", "buzz", "bang", "crash", "wallop"];

const exclaimedSounds = sounds.map((str) => {
  return str + "!";
});

runTest("check strings with added ! are pushed into exclaimedSounds", function () {
  check(exclaimedSounds).isEqualTo(["fizz!", "buzz!", "bang!", "crash!", "wallop!"]);
});

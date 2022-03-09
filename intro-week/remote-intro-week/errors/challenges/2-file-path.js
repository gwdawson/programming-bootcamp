const { check, printGreenMessage, printRedMessage } = require("../../test-api");

const filePath = "/Users/mitch/northcoders/remote_precourse/day_1/1_intro_strings";

let lastForwardSlashIndex = filePath.lastIndexOf("/");
let currentDirectory = filePath.slice(lastForwardSlashIndex + 1);

console.log("currentDirectory is initialised with the name of the directory and the end of the filePath");
try {
  check(currentDirectory).isEqualTo("1_intro_strings");
  printGreenMessage("Success :)");
} catch (e) {
  printRedMessage(e);
}

// Don't change anything below this line :)

var EXPRESSION_HERE;

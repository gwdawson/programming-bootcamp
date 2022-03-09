const { check, printGreenMessage, printRedMessage } = require("../../test-api"); 

try {
  const message = "hello there";
  check(message).isEqualTo("hello there");

  printGreenMessage("Success :)");
} catch (e) {
  printRedMessage(e);
}

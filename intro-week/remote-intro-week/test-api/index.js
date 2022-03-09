function customStringify(item) {
  function replacer(key, value) {
    if (typeof value === "function") return `[Function: ${value.name || "(anonymous)"}]`;
    // if undefined value is nested
    if (typeof value === "undefined" && key !== "") return "undefined";
    return value;
  }
  return JSON.stringify(item, replacer);
}

function check(value) {
  function isEqualTo(expected) {
    if (!checkDeeplyEqual(value, expected))
      throw new Error(
        `${customStringify(value)}\n is not equal to the expected value of\n ${customStringify(expected)}`
      );
  }
  return { isEqualTo };
}

function checkDeeplyEqual(coll1, coll2) {
  if (typeof coll1 !== "object" || typeof coll2 !== "object" || coll1 === null || coll2 === null)
    return coll1 === coll2;

  if (Object.keys(coll1).length !== Object.keys(coll2).length) return false;

  if (Array.isArray(coll1) !== Array.isArray(coll2)) return false;

  for (let key1 in coll1) {
    if (!(key1 in coll2)) return false;
    if (!checkDeeplyEqual(coll1[key1], coll2[key1])) return false;
  }
  return true;
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}

function printYellowMessage(message) {
  console.log("\x1b[33m", message, "\x1b[0m");
}

function runTest(title, func) {
  try {
    func();
    printGreenMessage("Pass ✔" + " " + title);
  } catch (error) {
    console.log(title);
    printRedMessage(error);
  }
}

function skipTest(title) {
  printYellowMessage(`skipping... ${title}`);
}

module.exports = { check, runTest, skipTest, printGreenMessage, printRedMessage };

const { check, runTest, skipTest } = require("../../test-api");

// declare pairDNA here
function pairDNA(dna) {
  const dnaPairs = {
    A: "T",
    C: "G",
    G: "C",
    T: "A",
  };
  const single = dna.toUpperCase().split("");
  const pairs = [];
  let match = "";
  for (const i of single) {
    if (dnaPairs.hasOwnProperty(i)) {
      match += i;
      match += dnaPairs[i];
      pairs.push(match);
      match = "";
    }
  }
  return pairs;
}

console.log("pairDNA");

runTest('returns [] when passed ""', function () {
  check(pairDNA("")).isEqualTo([]);
});
runTest("returns a single pair in an array when passed one", function () {
  check(pairDNA("G")).isEqualTo(["GC"]);
});
runTest("returns multiple pairs when passed multiple chars", function () {
  check(pairDNA("GGC")).isEqualTo(["GC", "GC", "CG"]);
});
runTest("returns correctly when passed lowercase letters", function () {
  check(pairDNA("gat")).isEqualTo(["GC", "AT", "TA"]);
});
runTest("ignores invalid chars but still returns valid ones within the string", function () {
  check(pairDNA("PGYYYHVB")).isEqualTo(["GC"]);
});

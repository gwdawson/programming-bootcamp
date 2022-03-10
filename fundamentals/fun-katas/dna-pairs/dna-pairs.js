// Please do not change the name of this function
function dnaPairs(dna) {
  if (dna.length === 0) return 0;
  const dnaArray = dna.toUpperCase().split('');
  const allPairs = [];

  const dnaMatch = {
    A: 'T',
    G: 'C',
    T: 'A',
    C: 'G',
  };

  for (const dnaSingle of dnaArray) {
    const dnaPair = [dnaSingle, dnaMatch[dnaSingle]];
    allPairs.push(dnaPair);
  }
  return allPairs;
}

module.exports = { dnaPairs };

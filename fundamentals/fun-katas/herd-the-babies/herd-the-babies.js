// Please do not change the name of this function
function herdTheBabies(str) {
  const mixed = str.split('');
  const upper = [];
  const lower = [];
  const splitIndex = [];
  const something = [];

  // creates upper and lower arrays
  for (const i of mixed) {
    if (i === i.toUpperCase()) upper.push(i);
    if (i === i.toLowerCase()) lower.push(i);
  }

  // sorts upper and lower arrays
  upper.sort();
  lower.sort();

  // loop through upper and fund the index in which the char changes
  for (let i = 0; i < upper.length; i++) {
    if (upper[i] !== upper[i + 1]) splitIndex.push(i);
  }
  splitIndex.pop();

  console.log(upper);

  // ...
  for (let i = 0; i < splitIndex.length + 1; i++) {
    let start = 0;
    something.push(upper.slice(start, splitIndex[i] + 1));
    start += something[i].length;
    console.log(something[i].length);
  }
  console.log(something);
}

herdTheBabies('AaBbbBaAbAbbAbB');

module.exports = herdTheBabies;

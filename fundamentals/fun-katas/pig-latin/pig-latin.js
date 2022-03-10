// Please do not change the name of this function
function pigLatin(str) {
  if (str.length === 0) return '';

  const split = str.split(' ');
  const mapped = split.map((word) => {
    const arr = word.match(/^[^aeiou]+/);
    // console.log(arr);

    if (arr === null) return `${str}way`;
  });
  console.log(mapped);
  return mapped.join(' ');
}

module.exports = { pigLatin };

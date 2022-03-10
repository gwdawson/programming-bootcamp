// Please do not change the name of this function
function foldString(str) {
  if (str.length === 0) return '';
  if (str.length % 2 === 0) {
    const first = str
      .slice(0, str.length / 2)
      .split('')
      .reverse();
    const second = str
      .slice(str.length / 2)
      .split('')
      .reverse();
    return [...first, ...second].join('');
  } else {
    const first = str
      .slice(0, str.length / 2 - 0.5)
      .split('')
      .reverse();
    const second = str
      .slice(str.length / 2 + 0.5)
      .split('')
      .reverse();
    const middle = str[first.length];
    return [...first, middle, ...second].join('');
  }
}

module.exports = { foldString };

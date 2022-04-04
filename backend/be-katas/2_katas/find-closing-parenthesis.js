// Please do not change the name of this function
const findClosingParenthesis = (str, index) => {
  const indexOfClosingBrackets = [];
  const splitString = str.split('');

  for (let index = 0; index < splitString.length; index++) {
    if (splitString[index] === ')') indexOfClosingBrackets.push(index);
  }

  if (indexOfClosingBrackets.length === 0) return -1;
  if (indexOfClosingBrackets.length === 1) return indexOfClosingBrackets[0];
  return indexOfClosingBrackets[index];
};

module.exports = { findClosingParenthesis };

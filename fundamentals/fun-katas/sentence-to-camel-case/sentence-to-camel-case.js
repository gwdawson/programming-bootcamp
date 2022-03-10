// Please do not change the name of this function
function sentenceToCamelCase(sentence, bool) {
  if (sentence.length === 0) return '';
  const newSentence = [];
  const array = sentence.toLowerCase().split(' ');
  if (bool) {
    firstWord = `${array[0][0].toUpperCase()}${array[0].slice(1)}`;
    newSentence.push(firstWord);
  } else {
    newSentence.push(array[0]);
  }
  for (let index = 1; index < array.length; index++) {
    newSentence.push(array[index][0].toUpperCase() + array[index].slice(1));
  }
  return newSentence.join('');
}

function camelToEnglish(sentence) {}

module.exports = { sentenceToCamelCase };

/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  const strArray = str.split('');
  if (str.length === 1) {
    return str.toUpperCase();
  } else {
    for (let i = 0; i < strArray.length; i += 2) {
      strArray[i] = strArray[i].toUpperCase();
    }
    return strArray.join('');
  }
}

module.exports = alternateCase;

/*
  The function caesarCipher should take a string and a number (n) and return a new string with a Caesar cipher applied. A Caesar cipher replaces each plaintext letter with a different one a fixed number of places up or down the alphabet. N represents the number of shifts up or down the alphabet should be applied. It may be negative or positive.
  E.g.
  caesarCipher('hello', 2)
    --> 'jgnnq'
  caesarCipher('hello world!', -3)
    --> 'ebiil tloia!'
*/

function caesarCipher(str, n) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // check string length to see if its empty or 1 letter
  str = str.toLowerCase();
  let newString = '';

  for (let i = 0; i < str.length; i++) {
    //push space to string
    if (str[i] === ' ') {
      newString += ' ';
      continue;
    }

    let curIndex = alphabet.indexOf(str[i]);
    let newIndex = curIndex + n;
    if (newIndex > 25) newIndex = newIndex % 26;
    if (newIndex < 0) newIndex = 26 + (newIndex % 26);
    newString += alphabet[newIndex];
  }
  return newString;
}

module.exports = caesarCipher;

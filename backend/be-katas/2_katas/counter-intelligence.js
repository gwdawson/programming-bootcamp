// Please do not change the name of this function
const counterIntelligence = (str) => {
  const refLower = 'abcdefghijklmnopqrstuvwxyz';
  const refUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const indexOfRefX = 23;
  let ref;

  str[0] === str[0].toUpperCase() ? (ref = refUpper) : (ref = refLower);
  const strArr = str.split('');
  const indexOfStrX = ref.indexOf(strArr[strArr.length - 1]);
  const differnece = indexOfRefX - indexOfStrX;

  const newStr = strArr.map((char) => {
    if (ref.indexOf(char) === -1) return char;
    const index = ref.indexOf(char);
    const newIndex = index + differnece;
    return ref[newIndex];
  });

  return newStr.join('');
};

module.exports = { counterIntelligence };

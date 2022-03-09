function doubleNum(num) {
  return num * 2;
}

console.log('I expect:');
console.log(doubleNum(1));
console.log('to be:');
console.log(2);

function doubleManyNums(arr) {
  return arr.map((num) => {
    return num * 2;
  });
}

console.log(`I expect: ${doubleManyNums([2, 4, 6])} to be: [4, 8, 12]`);

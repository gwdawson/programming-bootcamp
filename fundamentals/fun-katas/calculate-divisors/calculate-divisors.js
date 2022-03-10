// Please do not change the name of this function
function calculateDivisors(num) {
  if (num.length === 0) return 0;
  const numArr = [];
  let count = 0;
  for (let i = 1; i < num; i++) {
    numArr.push(i);
  }
  numArr.forEach((num) => {
    if (num % 3 === 0 || num % 5 === 0) {
      count += num;
    }
  });
  return count;
}

module.exports = { calculateDivisors };

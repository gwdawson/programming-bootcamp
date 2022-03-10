// Please do not change the name of this function
function changeCalculator(num) {
  if (num === 0) return 0;
  const coins = ['50', '20', '10', '5', '2', '1'];
  const change = { 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };
  let changeOwed = num;
  for (const coin of coins) {
    if (parseInt(coin) <= changeOwed) {
      change[coin]++;
      changeOwed -= parseInt(coin);
    }
  }
  for (const key in change) {
    if (change[key] === 0) {
      delete change[key];
    }
  }
  return change;
}

module.exports = { changeCalculator };

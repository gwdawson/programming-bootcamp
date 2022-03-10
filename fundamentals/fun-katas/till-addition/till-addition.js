// Please do not change the name of this function
function tillAddition(coins) {
  if (Object.keys(coins).length === 0) return `£0.00`;

  let count = 0;
  for (cash in coins) {
    if (cash === '1p') count += coins[cash] * 1;
    if (cash === '2p') count += coins[cash] * 2;
    if (cash === '5p') count += coins[cash] * 5;
    if (cash === '10p') count += coins[cash] * 10;
    if (cash === '20p') count += coins[cash] * 20;
    if (cash === '50p') count += coins[cash] * 50;
    if (cash === '£1') count += coins[cash] * 100;
    if (cash === '£2') count += coins[cash] * 200;
    if (cash === '£5') count += coins[cash] * 500;
    if (cash === '£10') count += coins[cash] * 1000;
    if (cash === '£20') count += coins[cash] * 2000;
    if (cash === '£50') count += coins[cash] * 5000;
  }
  return `£${count / 100}`;
}

module.exports = { tillAddition };

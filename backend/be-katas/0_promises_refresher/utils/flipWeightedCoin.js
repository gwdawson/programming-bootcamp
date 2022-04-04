module.exports = function flipWeightedCoin(num) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      if (num <= 0.3) {
        resolve('You win!');
      }
    }, Math.random() * 1000);
  });
};

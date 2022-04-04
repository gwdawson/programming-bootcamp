module.exports = function getQuote() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(
        'You either die a hero, or live long enough to see yourself become the villain'
      );
    }, Math.random * 500);
  });
};

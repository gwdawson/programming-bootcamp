module.exports = function getSuperHeroes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        'superman',
        'batman',
        'wonder woman',
        'spiderman',
        'captain america',
        'thor',
        'wolverine',
      ]);
    }, Math.random() * 1000);
  });
};

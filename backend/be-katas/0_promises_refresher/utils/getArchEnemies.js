module.exports = function getArchEnemies(heroes) {
  return new Promise((resolve, _reject) => {
    const villains = {
      SUPERMAN: 'LEX LUTHOR',
      BATMAN: 'THE JOKER',
      'WONDER WOMAN': null,
      SPIDERMAN: 'THE GREEN GOBLIN',
      'CAPTAIN AMERICA': 'THE RED SKULL',
      THOR: null,
      WOLVERINE: 'MAGNETO',
    };
    setTimeout(() => {
      const enemies = heroes.map((hero) => villains[hero] || null);
      resolve(enemies);
    }, Math.random() * 1000);
  });
};

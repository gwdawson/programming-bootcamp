const {
  decryptPassword,
  downLoadPersonalInfo,
  flipWeightedCoin,
  getPizzaShopInfo,
  getLoginDetails,
  getSuperHeroes,
  readFileWithPromise,
  getArchEnemies,
  checkPizzaShopOpen,
  callPizzaShop,
  cookHealthyMeal
} = require('./utils/index');

function fetchSuperHeroes() {
  return getSuperHeroes().then((heroes) => {
    return heroes.map((hero) => hero.toUpperCase());
  });
}

function fetchEnemies() {
  return fetchSuperHeroes()
    .then((heroes) => {
      return getArchEnemies(heroes);
    })
    .then((enemies) => {
      return enemies.filter((enemy) => enemy !== null);
    });
}

function orderPizza(shop) {
  return Promise.all([getPizzaShopInfo(shop), checkPizzaShopOpen(shop)]).then(
    (results) => {
      if (results[1].open === true) {
        return callPizzaShop(results[0].phone, results[1].open);
      } else {
        return cookHealthyMeal();
      }
    }
  );
}

function readJSONFiles(filepaths) {
  const promises = filepaths.map((filepath) => {
    return readFileWithPromise(filepath);
  });
  return Promise.all(promises).then((contents) => {
    return contents.map((content) => JSON.parse(content));
  });
}

function handleNonCompleteRequest(num) {
  return flipWeightedCoin(num).then((a) => {
    // i give up
  });
}

function hackBatman() {}

module.exports = {
  fetchSuperHeroes,
  fetchEnemies,
  hackBatman,
  handleNonCompleteRequest,
  readJSONFiles,
  orderPizza
};

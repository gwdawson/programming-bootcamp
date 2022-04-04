const format = require("pg-format");
const db = require("./");

const seed = ({ shopData, treasureData }) => {
  return db
    .query(`DROP TABLE IF EXISTS treasures;`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS shops;`);
    })
    .then(() => {
      return db.query(`
      CREATE TABLE shops (
        shop_id SERIAL PRIMARY KEY,
        shop_name VARCHAR(255) NOT NULL,
        slogan TEXT
        );`);
    })
    .then(() => {
      return db.query(`
      CREATE TABLE treasures (
        treasure_id SERIAL PRIMARY KEY,
        treasure_name VARCHAR(255) NOT NULL,
        colour TEXT NOT NULL,
        age INT NOT NULL,
        cost_at_auction DECIMAL NOT NULL,
        shop_id INT NOT NULL REFERENCES shops(shop_id)
        );`);
    })
    .then(() => {
      const mappedShopData = shopData.map((shop) => [
        shop.shop_name,
        shop.slogan,
      ]);
      const insertShops = format(
        `INSERT INTO shops (shop_name, slogan) VALUES %L;`,
        mappedShopData
      );
      return db.query(insertShops);
    })
    .then(() => {
      return db.query(`SELECT shop_name, shop_id FROM shops;`);
    })
    .then((shopNameAndID) => {
      const shopNameAndIdRows = shopNameAndID.rows;
      const lookupTable = {};
      let count = 0;

      shopNameAndIdRows.forEach(
        (shop) => (lookupTable[shop.shop_name] = shop.shop_id)
      );
      const shopNames = treasureData.map((shopName) => shopName.shop);
      const mappedTreasureData = treasureData.map((treasure) => {
        const shopName = shopNames[count++];
        const shopId = lookupTable[shopName];
        return [
          treasure.treasure_name,
          treasure.colour,
          treasure.age,
          treasure.cost_at_auction,
          shopId,
        ];
      });

      const insertTreasure = format(
        `INSERT INTO treasures (treasure_name, colour, age, cost_at_auction, shop_id) VALUES %L;`,
        mappedTreasureData
      );
      return db.query(insertTreasure);
    });
};

module.exports = seed;

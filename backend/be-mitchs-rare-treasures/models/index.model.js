const db = require("../db/index");

exports.selectTreasures = (query) => {
  let { sort } = query;
  sort = sort ?? "age";
  const validColums = ["age", "cost_at_auction", "treasure_name"];

  if (!validColums.includes(sort)) {
    return Promise.reject({ code: 62400, msg: "Invalid colum name" });
  }

  return db

    .query(
      `SELECT treasure_id, treasure_name, colour, age, cost_at_auction, shop_name FROM treasures JOIN shops ON treasures.shop_id = shops.shop_id ORDER BY ${sort} ASC`
    )
    .then((data) => {
      return data;
    });
};

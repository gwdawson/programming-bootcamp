const data = require("../db/data/test-data");
const seed = require("../db/seed");
const db = require("../db/index");
const request = require("supertest");
const app = require("../app");

beforeEach(() => seed(data));

describe("Database Seeding", () => {
  test("seeding should insert values into the (shops) table", () => {
    return db.query(`SELECT * FROM shops;`).then(({ rows }) => {
      expect(rows.length > 0).toBe(true);
    });
  });
  test("seeding should insert values into the (treasures) table", () => {
    return db.query(`SELECT * FROM treasures;`).then(({ rows }) => {
      expect(rows.length > 0).toBe(true);
    });
  });
});

describe("Treasures", () => {
  test("/api/treasure should have status of 200 ok", () => {
    return request(app).get("/api/treasures").expect(200);
  });

  test("/api/treasure should return a json object", () => {
    return request(app).get("/api/treasures").expect("Content-Type", /json/);
  });
  test("/api/treasure should return treasures", () => {
    return request(app)
      .get("/api/treasures")
      .then(({ body }) => {
        expect(body.data.length > 0).toBe(true);
      });
  });
  test("/api/treasure should an object with the keys{treasure_id, treasure_name, colour, age, cost_at_auction, shop_name}", () => {
    return request(app)
      .get("/api/treasures")
      .then(({ body }) => {
        const arr = body.data;
        arr.forEach((treasure) => {
          expect("treasure_id" in treasure).toBe(true);
          expect("treasure_name" in treasure).toBe(true);
          expect("colour" in treasure).toBe(true);
          expect("age" in treasure).toBe(true);
          expect("cost_at_auction" in treasure).toBe(true);
          expect("shop_name" in treasure).toBe(true);
        });
      });
  });

  test("/api/treasures should have default order of age ascending", () => {
    return request(app)
      .get("/api/treasures")
      .then(({ body }) => {
        const arr = body.data;
        expect(arr).toBeSortedBy("age", { descending: false });
      });
  });

  test("/api/treasures adding the sort by query returns sorted data", () => {
    return request(app)
      .get("/api/treasures?sort=age")
      .then(({ body }) => {
        const arr = body.data;
        expect(arr).toBeSortedBy("age", { descending: false });
      });
  });

  test("/api/treasures adding the sort by query returns sorted aut", () => {
    return request(app)
      .get("/api/treasures?sort=cost_at_auction")
      .then(({ body }) => {
        const arr = body.data;
        console.log(arr);
        expect(arr).toBeSortedBy("cost_at_auction", { descending: false });
      });
  });

  // test("/api/treasure should return treasure by treasure id", () => {
  //   return request(app)
  //     .get("/api/treasures")
  //     .then(({ body }) => {
  //       expect(body.data.length > 0).toBe(true);
  //     });
  // });
});

# Additional Tasks

## **POST** `/api/treasures`

You recently sorted through your attic and discovered some treasures of your own! As a good friend of Mitch, you entrust him with the sale of your precious items. Create an endpoint to add a new treasure.

_posts a new treasure to a shop_

- should post a new treasure to a given shop
- your new treasure should have the following keys
  - treasure_name
  - colour
  - age
  - cost_at_auction
  - shop_id (references an existing shop_id)

---

## **PATCH** `/api/treasures/:treasure_id`

The shop where Mitch has sent your treasures is having a sale. Create an endpoint to allow him to reduce the price of an item.

_updates a treasure in the database given a treasure id_

- should be able to update the price of a given treasure
- your patch request should contain the following information:
  - cost_at_auction

---

## **DELETE** `/api/treasures/:treasure_id`

Congratulations! Your item has been sold! Create an endpoint to delete your treasure from the database.

_deletes a treasure from the database given a treasure id_

- should be able to remove an existing treasure from the database, using the treasure_id

---

## **GET** `/api/shops`

Create an endpoint which allows Mitch to see all the shops in his network. He also needs to know how much capital is in each shop.

_responds with all shops_

- each shop object should have the following properties:
  - shop_id
  - shop_name
  - slogan
- add a **stock_value** key to each shop object (the total cost of treasures belonging to the shop). Lessons 10 and 11 of this [tutorial](https://sqlbolt.com/lesson/select_queries_with_aggregates) could be useful when beginning to write your SQL query.

---

## **GET** `/api/treasures/` - more queries

Return to the GET `/api/treasures` endpoint and add the capability for clients to filter the results by age.

- add the following queries:
  - max_age
  - min_age

---

## Advanced Tasks

### update **GET** `/api/treasures`

It looks like Mitch has ended up with a looooad of treasure. It can be problematic to serve up unconstrained data sets over a REST API. A solution to this is to [paginate](https://medium.com/swlh/paginating-requests-in-apis-d4883d4c1c4c) the responses. Implement page-based pagination on the treasures endpoint!

Using the `LIMIT` and `OFFSET` [SQL clauses](https://www.postgresql.org/docs/current/queries-limit.html), allow clients to decide how many treasures they will receive information about, and which "page" they will see.

- add default limit of 5 per page - `/api/treasures` should send out 5 treasures by default
- accept a `limit` query which will override the default limit - `/api/treasures?limit=10`, for example, should send out a maximum of 10 treasures
- accept a `page` query which will respond with the selected "page" of treasures. For example, with the default limit of 5:
  - `/api/treasures?page=1` should respond with the first 5 treasures
  - `/api/treasures?page=2` should respond with treasures 6 to 10
  - `/api/treasures?page=5` should respond with treasures 21 to 25

**HINT: you might want to sort your treasures by treasure_name so that it is easier to check whether your pagination is working as intended.**

### update **GET** `/api/shops`

Add the following keys to each shop object:

- `treasure_count` specifying the number of treasures for that shop
- `stock_value` specifying the total value of all of their treasures

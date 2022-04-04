# Mitch's Rare Treasures

Mitch has gone into business!

After taking offence at a remark about his business acumen, he has charged headlong into establishing a network of antiques shops around the country. His jealous former colleagues have tried to follow him into the already crowded field, and now it's time for him to do a little market research. You have to help.

## Day 1: Seeding

Mitch was planning to store all of his data in an Excel spreadsheet but you have informed him that this is a terrible idea. Convinced by your arguments, he made a start on the seed function by creating the `shops` table for the database but needs your help to finish it off.

### a) Drop the existing tables

The `seed` script provided for you in the `package.json` will run the `seed` function with the dev data. Use the `seed` script to check your `seed` function is working as intended.

> **Hint**: Remember that you'll need create a `.env.development` file (use the `example.env` as a template) and then run the `setup.sql` file to create the databases first

Your first job will be complete the seed function to remove any existing treasures tables. Update the seed function accordingly.

### b) Create a new treasures table

Next you will need to expand the `seed` function to create a `treasures` table.

Each treasure should have a unique identifier and the following properties:

| Property        | Type                  | Required |
| --------------- | --------------------- | -------- |
| treasure_name   | string                | true     |
| colour          | string                | true     |
| age             | number                | true     |
| cost_at_auction | floating point number | true     |
| shop_id\*       | number                | true     |

\* shop_id should reference a shop in the shops table.


### c) Insert the data

Mitch was going to enter this data by hand, but it was getting a little tiresome. Help him out by updating the **seed** function in `./db/seed.js` for the insertion of data into each table using `node-postgres`.

You will need to think about how to maintain relationships between the data before they are inserted into the db. In the database, treasures should reference the shop they belong to by the **shop_id**.

> When introducing new functionality into your seed file (or any file for that matter), it's important to remember to ask yourself: "Could I build this with TDD?". `node-postgres`, although it isn't our code, is a fully tested library. This means that we can use it and have a good degree of confidence in its effectiveness. If you need to add functionality to manipulate the data in any way, that's the time to start testing! Be sure that you build any seed utility functions you require using TDD.

## Day 2: Building the first endpoint

It's essential that each endpoint is tested, including a test for each query! Avoid testing for too many things in one assertion.
It might be worth using a very small dataset (you can use the data in your `./db/data/test-data.js` file!).

Add error handling tests for each endpoint immediately after implementing the happy-path.

> **Hint:** Remember that if you're going to use a _test_ database, you'll now need a `.env.test` file to specify the name of the test database.

### **GET** `/api/treasures`

Create an endpoint to allow Mitch to view all the treasures currently available.

_responds with all treasures, including the shop name and details_

- each treasure should have the following keys:

  - treasure_id
  - treasure_name
  - colour
  - age
  - cost_at_auction
  - **shop_name**

- default sort criteria: **age**
- default sort order: **ascending**

  - `/api/treasures`, first result should be the youngest (default)

- Allow a client to sort by `age`, `cost_at_auction` and `treasure_name` with a `sort_by` query.

  - _`/api/treasures?sort_by=cost_at_auction`, for example, should respond with a list of treasures, cheapest firsts._

If you have to use string interpolation here, make sure you validate the input to prevent **SQL INJECTION**.

> **Hint:** Some properties on the response might need to be coerced into numbers to check whether they are sorted correctly. Check out [the documentation for jest-sorted](https://www.npmjs.com/package/jest-sorted#user-content-tobesorted).

- Allow a client to change the sort **order** with an `order` query.
  - `/api/treasures?order=desc`, for example, first result should be the oldest

- add the following queries:
  - colour e.g. `/api/treasures?colour=gold` responds with gold treasures only

**If you have got this far, well done! Check that you have tested thoroughly and also tested your error handling - then you can have a look at the `additional-tasks.md` file for more endpoints to implement!**

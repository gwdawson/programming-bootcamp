# Rated Restaurants

## A micro [yelp](https://www.yelp.co.uk/c/manchester/restaurants) clone API using Express and SQL

### Background

We are going to build an API which shows ratings and cuisine for restaurants in the North.
For this Sprint we will be using [PostgreSQL](https://www.postgresql.org/) and [node-postgres](https://node-postgres.com/).

### W3 Schools

When we are looking for in depth knowledge on JavaScript we tend to use MDN - W3 Schools is a very good resource for referencing and learning SQL. [Here is the link](http://www.w3schools.com/sql/default.asp)

## Seeding

There is a file in the `db` folder for seeding both a dev and a test database. You can run these directly with `psql` and for the dev database we have provided the following script in your package.json: `npm run seed-dev`

### Tables

Both of the databases share the following table setup:

#### Areas Table

| area_id            | name    |
| ------------------ | ------- |
| SERIAL PRIMARY KEY | VARCHAR |

Areas `have many` Restaurants (see below)

#### Restaurants Table

| restaurant_id      | name    | area_id                  | cuisine | website |
| ------------------ | ------- | ------------------------ | ------- | ------- |
| SERIAL PRIMARY KEY | VARCHAR | INT REFERENCES Areas(id) | VARCHAR | VARCHAR |

Restaurants `have many` Ratings (see below)

#### Ratings Table

The rating must be an integer with a minimum value of one and a maximum value of five.

| rating_id          | restaurant_id                  | rating  | created_at                                   |
| ------------------ | ------------------------------ | ------- | -------------------------------------------- |
| SERIAL PRIMARY KEY | INT REFERENCES Restaurants(id) | INTEGER | TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP |

A rating does not need to know which Area the Restaurant it `belongs to` is in.

## Creating the connection to the separate `test` and `development` databases

Your first task is to create your connection to the database using `node-postgres`.

You will need to create a connection to the relevant database in a `./db/index.js` file, and use `dotenv` files (`.env.test` & `.env.development`) to determine which database to connect to, based on whether you are running your `jest` tests, or running the server manually.

> _`dotenv` is a [module that loads environment variables from a `.env` file into the `process.env` global object](https://github.com/motdotla/dotenv#readme)_

## API challenges

Now that we have our connection to our databases containing our data, we can start to build our server to interact with our data.

For each of the following endpoints, first write a test using `supertest` and then implement the endpoint.

**After your lecture on Day 2, make sure to go back to previous endpoints and add any error handling you can think of - testing first and then implementing.**

### 1. GET /api

This endpoint should respond with a json object containing a 'message' key.

_Note: you do **not** need a model function for this endpoint, as we are not interacting with the database!_

```js
{
  "message": "all ok"
}
```

### 2. GET /api/restaurants

This endpoint should respond with a json object containing a key of `restaurants` with a value of an array of all the restaurant objects.

E.g.

```js
{
  "restaurants": [
    // ... restaurant objects
  ]
}
```

### 3. POST /api/restaurants

This endpoint should add a restaurant to the database and respond with newly created restaurant

```js
// POST /api/restaurants - example request body:

{
  "restaurant_name": "The Codfather",
  "area_id": 2,
  "cuisine": "British",
  "website": "www.thecodfather.com"
};
```

```js
// Example response:
{
  "restaurant": {
    "restaurant_id": 9,
    "restaurant_name": "The Codfather",
    "area_id": 2,
    "cuisine": "British",
    "website": "www.thecodfather.com"
  }
}
```

### 4. DELETE /api/restaurants/:restaurant_id

This endpoint should delete the specified restaurant from the database and respond with a 204 No Content status.

### 5. PATCH /api/restaurants/:restaurant_id

This endpoint should be able to update the `area_id` field of the specified restaurant. It should respond with the updated restaurant object. Extra/invalid keys in the request object should be ignored, but an empty object in the request should get a 400 response.

```js
// PATCH /api/restaurants/3 - example request body:

{
  "area_id": 2 // <--- was previously area_id 3 for this restaurant
};
```

```js
// Example response:
{
  "restaurant": {
    "restaurant_id": 3,
    "restaurant_name": "Rudys Pizza",
    "area_id": 2,
    "cuisine": "Neapolitan Pizzeria",
    "website": "http://rudyspizza.co.uk/"
  }
}
```

### 6. GET /api/areas/:area_id/restaurants

This endpoint should respond with a json object with the area details, containing a count of the restaurants in that area and an array of those restaurants.

```js
// GET /api/areas/1/restaurants
{
  "area": {
    "area_id": 1,
    "name": "Northern Quarter",
    "total_restaurants": 4,
    "restaurants": [
      //  ... area 1 restaurants
    ]
  }
}
```

### 7. GET /api/restaurants

Update the existing endpoint so that each restaurant object has an `average_rating` property.

## Even More Challenges

### 8. GET /api/restaurants?search=<searchTerm>

Update the above endpoint to allow a `search` query which will filter the results for any restaurant names that match, or partially match, the search term.

**Hint:** - Implement this filtering in your SQL query rather than JavaScript.

E.g.

```js
// GET /api/restaurants?search=pi
{
  "restaurants": [
    // Rudys Pizza restaurant object,
    // Pieminister restaurant object
  ]
}
```

### 9. PATCH /api/restaurants/:restaurant_id

Update this endpoint so that multiple valid keys could be provided and all of those fields get updated.

```js
// PATCH /api/restaurants/5 - example request body:
{
 "website": "http://updatedWebsite.co.uk/",
 "area_id": 2 // <--- was area_id 1
};
```

```js
// Example response:
{
  "restaurant": {
    "restaurant_id": 5,
    "restaurant_name": "Pieminister",
    "area_id": 2,
    "cuisine": "Pies and More Pies",
    "website": "http://updatedWebsite.co.uk/"
  }
}
```

### 10. GET /api/restaurants?sort_by=<sortByCriteria>

This endpoint should be able to take a sort_by query that will sort the restaurants by the specified criteria, including rating. If no sort_by is specified, the sort should default to sorted alphabetically by name, descending.

```js
// GET /api/restaurants?sort_by=rating
{
  "restaurants": [
    // restaurant objects sorted by rating, descending order
  ]
}
```

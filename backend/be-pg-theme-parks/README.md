# PG Theme Parks

We have a database full of information all about theme parks. The goal today is to build a REST API so that people can see, add to, and update the data from across the internet without handing over complete access to the database.

So that you can spend a larger proportion of your time using `node-postgres`, an express server with routing has been set up for you. It is your job to complete the controllers and models and link them together.

## Setup

### Install the project's dependencies:

```sh
npm install
```

### Ensure the tests run:

```sh
npm test
```

Don't panic - all of the tests should fail at this point!

## Challenges

Each of the following challenges has a test already written in `__tests__/app.test.js`. Use the tests to check your work as you go. Feel free to explore the test file but don't worry too much about how exactly it works as that will be covered soon!

### Create a connection pool

- Install [node-postgres](https://node-postgres.com/)
- Create a new [connection pool](https://node-postgres.com/features/connecting) in the `db/index.js` file
- Export the connection pool so that it is available for use in other files

### 1. GET /api/parks

Complete the model (`selectParks` in `./models/parks.js`) and controller (`getParks` in `./controllers/parks.js`) to make your server respond with an array containing all of the parks in the database when somebody makes a `GET` request to the `/api/parks` endpoint of your server.

A successful `GET` request should respond with a [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) status code.

The body of the response that you send from your server to the client should be structured like this:

```json
{
  "parks": [
    {
      "park_id": 1,
      "park_name": "Thorpe Park",
      "year_opened": 1979,
      "annual_attendance": 1700000
    }
  ]
}
```

### 2. GET /api/parks/:park_id

Finish the model and controller to allow a user to view information about a specified park.

- Controller: `getParkById` in `./controllers/parks.js`
- Model: `selectParkById` in `./models/parks.js`

Response body structure:

```json
{
  "park": {
    "park_id": 1,
    "park_name": "Thorpe Park",
    "year_opened": 1979,
    "annual_attendance": 1700000
  }
}
```

### 3. POST /api/parks

Finish the model and controller to allow a user to add a new park to the database. They will need to provide `park_name`,`year_opened`, and `annual_attendance` properties in the request body. Respond with the newly created park.

- Controller: `postPark` in `./controllers/parks.js`
- Model: `insertPark` in `./models/parks.js`

A successful `POST` request should respond with a [201 Created](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201) status code.

Response body structure:

```json
{
  "park": {
    "park_id": 4,
    "park_name": "New Park Name",
    "year_opened": 2022,
    "annual_attendance": 0
  }
}
```

#### ❗ **Hint:** Don't forget to [parse the incoming request body to JSON](https://expressjs.com/en/4x/api.html#express.json)! 

### 4. DELETE /api/parks/:park_id

Remove the specified park from the database and respond with the appropriate status code but _no response body_.

- Controller: `removeParkById` in `./controllers/parks.js`
- Model: `deleteParkById` in `./models/parks.js`

A successful `DELETE` request should respond with a [204 No Content](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204) status code.

### 5. PATCH /api/parks/:park_id

Only allow a user to update both the `park_name` & `annual_attendance` properties in the request body. Let's assume for this endpoint that a user _always_ provides both properties when they want to update a park. Respond with the newly updated park.

A successful `PATCH` request should respond with a [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) status code.

- Controller: `patchParkById`in `./controllers/parks.js`
- Model: `updateParkById` in `./models/parks.js`

## Extra Challenges

Good work making it this far! ⚡️

For the next set of challenges, you will have to build your own controllers and models. There are no tests for these challenges, so you will have to verify that they behave as they should by running your server and making requests to it with [Insomnia](https://insomnia.rest/).

```sh
npm run dev
```

### 6. GET /api/parks/:park_id/rides

Responds with an object containing an array of rides at the specified theme park.

### 7. GET /api/rides/:ride_id

Using an SQL `JOIN`, respond with an object containing a single ride object with its `park_id` and `category_id` columns populated with their `park_name` and `category_name` values respectively, with the column names aliased to `park` and `category`.

```json
Example response:

{
 "ride": {
    "id": 1,
    "ride_name": "Colossus",
    "year_opened": 2002,
    "votes": 5,
    "park": "Thorpe Park",
    "category": "Rollercoaster"
  }
}
```

### 8. POST /api/parks/:park_id/rides

Add a new ride to the database and responds with an object containing the new ride object.

### 9. PATCH /api/rides/:ride_id?vote=<up OR down>

Adjusts the votes (by 1) of an individual ride dependant on the request query and responds with an object containing the updated ride.

If no query is provided, respond with the unchanged ride.

## Even More Challenges!

Still going? 😮  Have a go at building any of the following endpoints:

- `GET /api/parks/:park_id/stalls` => Responds with an object containing an array of stalls at the specified theme park.
- `POST /api/parks/:park_id/stalls` => Adds a new stall to the database and responds with an object containing the new stall object if the post is successful.
- `GET /api/rides?since=<NUMBER>` => Responds with an object containing an array of rides opened before the year specified in the query.
- `GET /api/rides?after=<NUMBER>` => Responds with an object containing an array of rides opened after the year specified in the query.
- `GET /api/rides?minVotes=<NUMBER>` => Responds with an object containing an array of rides with at least the number of votes specified in the query.
- `GET /api/rides?since=<NUMBER>&minVotes=<NUMBER>`=> Responds with an object containing an array of rides that meet the criteria of multiple queries.

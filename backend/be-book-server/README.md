# Book Server

Today we will be building our very first **http** server!

_Remember to use `fs/promises` to read the data files!_

## Challenges

1. Create a new file called `server.js` and using Node's `http` module create a web server that responds with a status 200 and a greeting when it receives a GET request on the path `/api` (e.g. `{ message: "Hello! }`)

2. Add a GET `/api/books` endpoint that responds with a status 200 and a JSON object, that has a key of `books` with a value of the array of books from the `./data/books.json` file.

3. Add a GET `/api/authors` endpoint that responds with a status 200 and a JSON object, that has a key of `authors` with a value of the array of authors from the `./data/authors.json` file.

## More Challenges

4. Add a GET `/api/books/:bookId` (e.g. `/api/books/1`) parametric endpoint that responds with a status 200 and a JSON object, that has a key of `book` with a value of the relevant book object from the `./data/books.json` file.

5. Add a POST `/api/books` endpoint that accepts a book object on the body of the request and adds the book to the `./data/books.json` file. The endpoint should respond with the newly created book object. Additional considerations:

   - How could you ensure that the `bookId` that is created is unique?
   - What status code should the server respond with?

6. Add a GET `/api/books/:bookId/author` (e.g. `/api/books/1/author`) parametric endpoint that responds with a status 200 and a JSON author object for the specified book. The JSON object should have a key of `author` with a value of a single author object from the `./data/authors.json` file.

## Even More Challenges

7. Add error-handling to your GET `/api/books/:bookId` and `/api/books/:bookId/author` endpoints. Think about what should happen if a request is made for a book that doesn't exist. What status code should be sent?

8. Add a `fiction` query parameter to your GET `/api/books` endpoint (e.g. `/api/books?fiction=true` or `/api/books?fiction=false`) that searches for books that are either fiction, or non-fiction.

9. Add error-handling to your POST `/api/books` endpoint. Think about what should happen if a request is made without including enough information on the body of the request. What status code should be sent?

10. Add error-handling to your GET `/api/books` endpoint. Think about what should happen if an invalid query is used, e.g. `?fiction=banana`. What status code should be sent?

11. Research the MVC (Model-View-Controller) pattern, [this article](https://www.freecodecamp.org/news/model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar-efcba6255053/) is a good place to start. Then try to refactor your server to have separate functions for your **models** and **controllers** (we don't have "views" at the moment)

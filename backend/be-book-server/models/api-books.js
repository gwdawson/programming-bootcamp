const fs = require("fs/promises");

module.exports = function apiBooks(request, response, queryObject) {
  fs.readFile("data/books.json", "utf8").then((data) => {
    let books = JSON.parse(data);

    if (queryObject.fiction !== undefined) {
      if (queryObject.fiction !== "true" && queryObject.fiction !== "false") {
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 400;
        response.write("invalid query");
        response.end();
      } else {
        books = books.filter(
          (book) => book.isFiction == JSON.parse(queryObject.fiction)
        );
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 200;
        response.write(JSON.stringify({ books }));
        response.end();
      }
    } else {
      response.setHeader("Content-Type", "application/json");
      response.statusCode = 200;
      response.write(JSON.stringify({ books }));
      response.end();
    }
  });
};

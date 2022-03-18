const fs = require("fs/promises");

module.exports = function (request, response, id) {
  fs.readFile("data/books.json", "utf8")
    .then((data) => {
      const books = JSON.parse(data);
      const book = books.filter((book) => book.bookId === parseInt(id));
      if (book.length !== 0) {
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 200;
        response.write(JSON.stringify({ book }));
        response.end();
      } else {
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 404;
        response.write("Book not found!");
        response.end();
      }
    })
    .catch(console.log);
};

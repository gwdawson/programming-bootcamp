const fs = require("fs/promises");

module.exports = (request, response, id) => {
  Promise.all([
    fs.readFile("data/authors.json", "utf8"),
    fs.readFile("data/books.json", "utf8"),
  ])
    .then(([authors, books]) => {
      const authorsBooks = JSON.parse(books).filter(
        (book) => book.bookId === parseInt(id)
      );
      if (authorsBooks.length === 0) {
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 404;
        response.write("Author not found!");
        response.end();
      }
      const authorId = authorsBooks[0].authorId;
      const author = JSON.parse(authors).filter(
        (author) => author.authorId === parseInt(authorId)
      );
      response.setHeader("Content-Type", "application/json");
      response.statusCode = 200;
      response.write(JSON.stringify({ author }));
      response.end();
    })
    .catch((err) => {
      console.log(err);
    });
};

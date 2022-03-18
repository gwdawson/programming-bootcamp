const http = require("http");
const queryUrl = require("url");
const fs = require("fs/promises");

const server = http.createServer((request, response) => {
  const { url, method } = request;
  const queryObject = queryUrl.parse(url, true).query;

  if (method === "GET" && url === "/api") {
    response.setHeader("Content-Type", "application/json");
    response.statusCode = 200;
    response.write(JSON.stringify({ message: "Hello!" }));
    response.end();
  }

  if (method === "GET" && queryUrl.parse(url).pathname === "/api/books") {
    fs.readFile("data/books.json", "utf8").then((data) => {
      let books = JSON.parse(data);

      console.log(typeof queryObject.fiction, queryObject.fiction);

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
  }

  if (method === "GET" && url === "/api/authors") {
    fs.readFile("data/authors.json", "utf8").then((data) => {
      const authors = JSON.parse(data);
      response.setHeader("Content-Type", "application/json");
      response.statusCode = 200;
      response.write(JSON.stringify({ authors }));
      response.end();
    });
  }

  if (method === "GET") {
    const splitUrl = url.split("/");
    const id = splitUrl[splitUrl.length - 1];

    const result = /\d/.test(id);
    if (result) {
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
    }
  }

  if (method === "POST" && url === "/api/books") {
    let data = "";
    request.on("data", (packet) => {
      data += packet.toString();
    });
    request.on("end", () => {
      if (
        !JSON.parse(data).book.hasOwnProperty("bookTitle") ||
        !JSON.parse(data).book.hasOwnProperty("isFiction")
      ) {
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 400;
        response.write(
          'Not enough information, please give "bookTitle" and "isFiction"'
        );
        response.end();
      } else {
        fs.readFile("data/books.json", "utf8")
          .then((books) => {
            let parsedBooks = JSON.parse(books);
            data = JSON.parse(data);
            data.bookId = parsedBooks[parsedBooks.length - 1].bookId + 1;
            parsedBooks.push(data);
            return fs.writeFile(
              "data/books.json",
              JSON.stringify(parsedBooks, null, 2)
            );
          })
          .then(() => {
            response.setHeader("Content-Type", "application/json");
            response.statusCode = 201;
            response.write(JSON.stringify({ data }));
            response.end();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  if (method === "GET") {
    const splitUrl = url.split("/");
    const id = splitUrl[splitUrl.length - 2];
    const author = splitUrl[splitUrl.length - 1];

    const result = /\d/.test(id);
    if (result && author === "author") {
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
    }
  }
});

server.listen(3000, () => {
  console.log("the server is alive");
});

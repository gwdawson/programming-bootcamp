const fs = require("fs/promises");
module.exports = (request, response) => {
  let data = "";
  request.on("data", (packet) => {
    data += packet.toString();
  });
  request.on("end", () => {
    console.log(JSON.parse(data));
    if (
      !JSON.parse(data).hasOwnProperty("bookTitle") ||
      !JSON.parse(data).hasOwnProperty("isFiction")
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
};

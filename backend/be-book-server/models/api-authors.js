const fs = require("fs/promises");

module.exports = function apiAuthors(request, response) {
  fs.readFile("data/authors.json", "utf8").then((data) => {
    const authors = JSON.parse(data);
    response.setHeader("Content-Type", "application/json");
    response.statusCode = 200;
    response.write(JSON.stringify({ authors }));
    response.end();
  });
};

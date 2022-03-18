const queryUrl = require("url");
const fs = require("fs/promises");

module.exports = function controllers(request, response) {
  const { url, method } = request;
  const queryObject = queryUrl.parse(url, true).query;
  if (method === "GET" && url === "/api") {
    require("../models/api")(request, response);
  }

  if (method === "GET" && queryUrl.parse(url).pathname === "/api/books") {
    require("../models/api-books")(request, response, queryObject);
  }
  if (method === "GET" && url === "/api/authors") {
    require("../models/api-authors")(request, response);
  }

  if (method === "GET") {
    const splitUrl = url.split("/");
    const id = splitUrl[splitUrl.length - 1];

    const result = /\d/.test(id);
    const bookUrl = splitUrl[splitUrl.length - 2];
    if (result && bookUrl === "books") {
      require("../models/api-books-:bookId")(request, response, id);
    }
  }

  if (method === "POST" && url === "/api/books") {
    require("../models/post-api-books")(request, respo);
  }

  if (method === "GET") {
    const splitUrl = url.split("/");
    const id = splitUrl[splitUrl.length - 2];
    const author = splitUrl[splitUrl.length - 1];

    const result = /\d/.test(id);
    if (result && author === "author") {
      require("../models/api-books-bookid-author")(request, response, id);
    }
  }
};

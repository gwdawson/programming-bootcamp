const http = require("http");
const controller = require("./controllers/controller");

const server = http.createServer((request, response) => {
  controller(request, response);
});

server.listen(3000, () => {
  console.log("the server is alive");
});

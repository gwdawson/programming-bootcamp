module.exports = function api(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.statusCode = 200;
  response.write(JSON.stringify({ message: "Hello!" }));
  response.end();
};

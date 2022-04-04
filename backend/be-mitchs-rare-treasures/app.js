const { getTreasures } = require("./controllers/index.controller");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/treasures", getTreasures);
app.use((err, req, res, next) => {
  const code = [62400];
  if (err.code in code) {
    res.status(400).send({ msg: "invalid search query" });
  }
});
app.use((err, req, res, next) => {
  console.log(err, "error");
  res.status(500).send({ msg: "internal servor error" });
});
module.exports = app;

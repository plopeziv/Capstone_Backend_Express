const express = require("express");
const pgp = require("pg-promise");

const app = express();
const port = 3040;

const db = pgp("postgres://postgres:mysecret@localhost:5432/mydb");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const pgp = require("pg-promise")();
require("dotenv").config();

const app = express();
const port = 3040;
const { LOCAL_DB_PASSWORD, DB_NAME } = process.env;

const dbPassword = encodeURIComponent(LOCAL_DB_PASSWORD);
const db = pgp(`postgres://postgres:${dbPassword}@localhost:5432/${DB_NAME}`);

app.get("/", async (req, res) => {
  try {
    const data = await db.one("SELECT $1 AS value", 123);

    res.send(`Hello World! Value from DB: ${data.value}`);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Database error: ${err}`);
  }
});

app.get("/qb", async (req, res) => {
  try {
    const qbs = await db.any(`SELECT * FROM public."QB"`);
    res.json(qbs);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Database error: ${err}`);
  }
});

app.get("/rb", async (req, res) => {
  try {
    const qbs = await db.any(`SELECT * FROM public."RB"`);
    res.json(qbs);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Database error: ${err}`);
  }
});

app.get("/wr", async (req, res) => {
  try {
    const qbs = await db.any(`SELECT * FROM public."WR"`);
    res.json(qbs);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Database error: ${err}`);
  }
});

app.get("/te", async (req, res) => {
  try {
    const qbs = await db.any(`SELECT * FROM public."TE"`);
    res.json(qbs);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Database error: ${err}`);
  }
});

app.get("/k", async (req, res) => {
  try {
    const qbs = await db.any(`SELECT * FROM public."K"`);
    res.json(qbs);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Database error: ${err}`);
  }
});

app.listen(port, () => {
  console.log(`Capstone Backend listening on port ${port}`);
});

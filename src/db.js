const pgp = require("pg-promise")();
const fs = require("fs");
const path = require("path");

require("dotenv").config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_SSL_CERT_PATH } =
  process.env;

const ssl = DB_SSL_CERT_PATH
  ? { ca: fs.readFileSync(path.resolve(DB_SSL_CERT_PATH)).toString() }
  : undefined;

const db = pgp({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  ...(ssl && {
    ssl: ssl,
  }),
});

module.exports = db;

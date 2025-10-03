const pgp = require("pg-promise")();
const fs = require("fs");
const path = require("path");

require("dotenv").config();

const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_SSL_CERT_PATH,
  DB_CA,
} = process.env;

const ca = DB_CA
  ? {
      rejectUnauthorized: true,
      ca: Buffer.from(DB_CA, "base64").toString("utf-8"),
    }
  : undefined;

const db = pgp({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  ...(ca && {
    ssl: ca,
  }),
});

module.exports = db;

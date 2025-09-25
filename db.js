const pgp = require("pg-promise")();
require("dotenv").config();

const { LOCAL_DB_PASSWORD, DB_NAME } = process.env;

const dbPassword = encodeURIComponent(LOCAL_DB_PASSWORD);
const db = pgp(`postgres://postgres:${dbPassword}@localhost:5432/${DB_NAME}`);

module.exports = db;

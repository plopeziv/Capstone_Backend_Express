const db = require("../db");

const K = {
  getAllKs: () => db.any('SELECT * FROM public."K"'),
};

module.exports = K;

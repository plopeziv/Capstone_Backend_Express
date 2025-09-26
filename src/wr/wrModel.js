const db = require("../db");

const WR = {
  getAllWRs: () => db.any('SELECT * FROM public."WR"'),
};

module.exports = WR;

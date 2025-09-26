const db = require("../db");

const RB = {
  getAllRBs: () => db.any('SELECT * FROM public."RB"'),
};

module.exports = RB;

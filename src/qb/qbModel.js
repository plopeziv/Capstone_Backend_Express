const db = require("../db");

const QB = {
  getAllQBs: () => db.any('SELECT * FROM public."QB"'),
};

module.exports = QB;

const db = require("../db");

const TE = {
  getAllTEs: () => db.any('SELECT * FROM public."TE"'),
};

module.exports = TE;

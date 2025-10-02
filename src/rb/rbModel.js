const db = require("../db");

const RB = {
  getAllRBs: () => db.any('SELECT * FROM public."RB"'),

  getRBsByFilters: (filters = {}) => {
    let baseQuery = 'SELECT * FROM public."RB"';

    const queryValues = [];
    const queryConditions = [];

    Object.entries(filters).forEach(([queryKey, queryValue]) => {
      if (queryValue) {
        queryValues.push(queryValue);
        queryConditions.push(`"${queryKey}" = $${queryValues.length}`);
      }
    });

    if (queryValues.length > 0) {
      baseQuery = `${baseQuery} WHERE ${queryConditions.join(" AND ")}`;
    }

    console.log(baseQuery);

    return db.any(baseQuery, queryValues);
  },
};

module.exports = RB;

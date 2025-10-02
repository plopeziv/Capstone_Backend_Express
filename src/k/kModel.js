const db = require("../db");

const K = {
  getAllKs: () => db.any('SELECT * FROM public."K"'),

  getKsByFilters: (filters = {}) => {
    let baseQuery = 'SELECT * FROM public."K"';

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

module.exports = K;

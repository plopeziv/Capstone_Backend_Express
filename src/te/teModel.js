const db = require("../db");

const TE = {
  getAllTEs: () => db.any('SELECT * FROM public."TE"'),

  getTEsByFilters: (filters = {}) => {
    let baseQuery = 'SELECT * FROM public."TE"';

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

module.exports = TE;

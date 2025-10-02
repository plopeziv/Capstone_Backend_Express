const QB = require("./qbModel");

const qbController = {
  getAllQBs: async (req, res) => {
    try {
      const { player_id, team, week, player_opponent } = req.query;

      const queryFilters = {
        PlayerId: player_id,
        Team: team,
        Week: week,
        PlayerOpponent: player_opponent,
      };

      const qbs = Object.values(queryFilters).some(
        (value) => value !== undefined
      )
        ? await QB.getQBsByFilters(queryFilters)
        : await QB.getAllQBs(queryFilters);

      res.json(qbs);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Database error: ${err}`);
    }
  },
};

module.exports = qbController;

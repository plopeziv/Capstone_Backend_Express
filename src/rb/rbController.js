const RB = require("./rbModel");

const rbController = {
  getAllRBs: async (req, res) => {
    try {
      const { player_id, team, week, player_opponent } = req.query;

      const queryFilters = {
        PlayerId: player_id,
        Team: team,
        Week: week,
        PlayerOpponent: player_opponent,
      };

      const rbs = Object.values(queryFilters).some(
        (value) => value !== undefined
      )
        ? await RB.getRBsByFilters(queryFilters)
        : await RB.getAllRBs(queryFilters);

      res.json(rbs);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Database error: ${err}`);
    }
  },
};

module.exports = rbController;

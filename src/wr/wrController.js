const WR = require("./wrModel");

const wrController = {
  getAllWRs: async (req, res) => {
    try {
      const { player_id, team, week, player_opponent } = req.query;

      const queryFilters = {
        PlayerId: player_id,
        Team: team,
        Week: week,
        PlayerOpponent: player_opponent,
      };

      const wrs = Object.values(queryFilters).some(
        (value) => value !== undefined
      )
        ? await WR.getWRsByFilters(queryFilters)
        : await WR.getAllWRs(queryFilters);

      res.json(wrs);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Database error: ${err}`);
    }
  },
};

module.exports = wrController;

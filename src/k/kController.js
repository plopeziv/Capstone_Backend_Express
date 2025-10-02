const K = require("./kModel");

const kController = {
  getAllKs: async (req, res) => {
    try {
      const { player_id, team, week, player_opponent } = req.query;

      const queryFilters = {
        PlayerId: player_id,
        Team: team,
        Week: week,
        PlayerOpponent: player_opponent,
      };

      const ks = Object.values(queryFilters).some(
        (value) => value !== undefined
      )
        ? await K.getKsByFilters(queryFilters)
        : await K.getAllKs(queryFilters);

      res.json(ks);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Database error: ${err}`);
    }
  },
};

module.exports = kController;

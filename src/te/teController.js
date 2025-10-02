const TE = require("./teModel");

const teController = {
  getAllTEs: async (req, res) => {
    try {
      const { player_id, team, week, player_opponent } = req.query;

      const queryFilters = {
        PlayerId: player_id,
        Team: team,
        Week: week,
        PlayerOpponent: player_opponent,
      };

      const tes = Object.values(queryFilters).some(
        (value) => value !== undefined
      )
        ? await TE.getTEsByFilters(queryFilters)
        : await TE.getAllTEs(queryFilters);

      res.json(tes);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Database error: ${err}`);
    }
  },
};

module.exports = teController;

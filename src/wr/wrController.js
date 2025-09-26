const WR = require("./wrModel");

const wrController = {
  getAllWRs: async (req, res) => {
    try {
      const wrs = await WR.getAllWRs();
      res.json(wrs);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Database error: ${err}`);
    }
  },
};

module.exports = wrController;

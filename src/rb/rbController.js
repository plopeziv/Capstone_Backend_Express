const RB = require("./rbModel");

const rbController = {
  getAllRBs: async (req, res) => {
    try {
      const rbs = await RB.getAllRBs();
      res.json(rbs);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Database error: ${err}`);
    }
  },
};

module.exports = rbController;

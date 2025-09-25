const QB = require("./qbModel");

const qbController = {
  getAllQBs: async (req, res) => {
    try {
      const qbs = await QB.getAllQBs();
      res.json(qbs);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Database error: ${err}`);
    }
  },
};

module.exports = qbController;

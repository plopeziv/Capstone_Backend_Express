const TE = require("./teModel");

const teController = {
  getAllTEs: async (req, res) => {
    try {
      const tes = await TE.getAllTEs();
      res.json(tes);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Database error: ${err}`);
    }
  },
};

module.exports = teController;

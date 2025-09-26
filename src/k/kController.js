const K = require("./kModel");

const kController = {
  getAllKs: async (req, res) => {
    try {
      const ks = await K.getAllKs();
      res.json(ks);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Database error: ${err}`);
    }
  },
};

module.exports = kController;

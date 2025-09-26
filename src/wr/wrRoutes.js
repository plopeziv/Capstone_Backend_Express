const express = require("express");
const router = express.Router();
const wrController = require("./wrController");

router.get("/", wrController.getAllWRs);

module.exports = router;

const express = require("express");
const router = express.Router();
const kController = require("./kController");

router.get("/", kController.getAllKs);

module.exports = router;

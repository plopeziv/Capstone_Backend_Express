const express = require("express");
const router = express.Router();
const rbController = require("./rbController");

router.get("/", rbController.getAllRBs);

module.exports = router;

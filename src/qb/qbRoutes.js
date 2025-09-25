const express = require("express");
const router = express.Router();
const qbController = require("./qbController");

router.get("/", qbController.getAllQBs);

module.exports = router;

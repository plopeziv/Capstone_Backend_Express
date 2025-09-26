const express = require("express");
const router = express.Router();
const teController = require("./teController");

router.get("/", teController.getAllTEs);

module.exports = router;

const express = require("express");
const router = express.Router();
const kController = require("./kController");

/**
 * @openapi
 * /k:
 *   get:
 *     summary: Retrieve a list of all Ks weekly performances
 *     responses:
 *       200:
 *         description: A list of this year's Ks performance by week
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   PlayerId:
 *                     type: string
 *                     example: "2560900"
 *                   PlayerName:
 *                     type: string
 *                     example: "Justin Tucker"
 *                   Pos:
 *                     type: string
 *                     example: "K"
 *                   Team:
 *                     type: string
 *                     example: "BAL"
 *                   Week:
 *                     type: string
 *                     example: "1"
 *                   PlayerOpponent:
 *                     type: string
 *                     example: "CLE"
 *                   TotalPoints:
 *                     type: number
 *                     format: float
 *                     example: 10.0
 */
router.get("/", kController.getAllKs);

module.exports = router;

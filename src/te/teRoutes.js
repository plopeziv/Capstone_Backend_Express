const express = require("express");
const router = express.Router();
const teController = require("./teController");

/**
 * @openapi
 * /te:
 *   get:
 *     summary: Retrieve a list of all TEs weekly performances
 *     responses:
 *       200:
 *         description: A list of this year's TEs performance by week
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   PlayerId:
 *                     type: string
 *                     example: "2560881"
 *                   PlayerName:
 *                     type: string
 *                     example: "Travis Kelce"
 *                   Pos:
 *                     type: string
 *                     example: "TE"
 *                   Team:
 *                     type: string
 *                     example: "KC"
 *                   Week:
 *                     type: string
 *                     example: "1"
 *                   PlayerOpponent:
 *                     type: string
 *                     example: "LV"
 *                   TotalPoints:
 *                     type: number
 *                     format: float
 *                     example: 21.0
 */
router.get("/", teController.getAllTEs);

module.exports = router;

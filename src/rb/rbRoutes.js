const express = require("express");
const router = express.Router();
const rbController = require("./rbController");

/**
 * @openapi
 * /rb:
 *   get:
 *     summary: Retrieve a list of all RBs weekly performances
 *     responses:
 *       200:
 *         description: A list of this year's RBs performance by week
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   PlayerId:
 *                     type: string
 *                     example: "2560843"
 *                   PlayerName:
 *                     type: string
 *                     example: "Derrick Henry"
 *                   Pos:
 *                     type: string
 *                     example: "RB"
 *                   Team:
 *                     type: string
 *                     example: "TEN"
 *                   Week:
 *                     type: string
 *                     example: "1"
 *                   PlayerOpponent:
 *                     type: string
 *                     example: "JAX"
 *                   TotalPoints:
 *                     type: number
 *                     format: float
 *                     example: 22.5
 */
router.get("/", rbController.getAllRBs);

module.exports = router;

const express = require("express");
const router = express.Router();
const qbController = require("./qbController");

/**
 * @openapi
 * /qb:
 *   get:
 *     summary: Retrieve a list of all QBs weekly performances
 *     responses:
 *       200:
 *         description: A list of this year's QBs performance by week
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   PlayerId:
 *                     type: string
 *                     example: "2560955"
 *                   PlayerName:
 *                     type: string
 *                     example: "Josh Allen"
 *                   Pos:
 *                     type: string
 *                     example: "QB"
 *                   Team:
 *                     type: string
 *                     example: "BUF"
 *                   Week:
 *                     type: string
 *                     example: "1"
 *                   PlayerOpponent:
 *                     type: string
 *                     example: "BAL"
 *                   TotalPoints:
 *                     type: number
 *                     format: float
 *                     example: 38.76
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Database error: connection failed"
 */

router.get("/", qbController.getAllQBs);

module.exports = router;

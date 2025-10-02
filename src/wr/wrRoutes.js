const express = require("express");
const router = express.Router();
const wrController = require("./wrController");

/**
 * @openapi
 * /wr:
 *   get:
 *     summary: Retrieve a list of all WRs weekly performances
 *     parameters:
 *      - in: query
 *        name: player_id
 *        schema:
 *          type: string
 *        required: false
 *        description: Filter by Player ID
 *      - in: query
 *        name: team
 *        schema:
 *          type: string
 *        required: false
 *        description: Filter by WR's Team
 *      - in: query
 *        name: week
 *        schema:
 *          type: string
 *        required: false
 *        description: Filter by NFL's Scheduled Week
 *      - in: query
 *        name: player_opponent
 *        schema:
 *          type: string
 *        required: false
 *        description: Filter by Team Faced
 *     responses:
 *       200:
 *         description: A list of this year's WRs performance by week
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   PlayerId:
 *                     type: string
 *                     example: "2560857"
 *                   PlayerName:
 *                     type: string
 *                     example: "Davante Adams"
 *                   Pos:
 *                     type: string
 *                     example: "WR"
 *                   Team:
 *                     type: string
 *                     example: "LV"
 *                   Week:
 *                     type: string
 *                     example: "1"
 *                   PlayerOpponent:
 *                     type: string
 *                     example: "KC"
 *                   TotalPoints:
 *                     type: number
 *                     format: float
 *                     example: 19.3
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
router.get("/", wrController.getAllWRs);

module.exports = router;

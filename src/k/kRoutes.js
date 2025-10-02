const express = require("express");
const router = express.Router();
const kController = require("./kController");

/**
 * @openapi
 * /k:
 *   get:
 *     summary: Retrieve a list of all Ks weekly performances
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
 *        description: Filter by K's Team
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
router.get("/", kController.getAllKs);

module.exports = router;

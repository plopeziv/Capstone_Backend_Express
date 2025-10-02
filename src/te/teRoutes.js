const express = require("express");
const router = express.Router();
const teController = require("./teController");

/**
 * @openapi
 * /te:
 *   get:
 *     summary: Retrieve a list of all TEs weekly performances
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
 *        description: Filter by TE's Team
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
router.get("/", teController.getAllTEs);

module.exports = router;

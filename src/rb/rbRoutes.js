const express = require("express");
const router = express.Router();
const rbController = require("./rbController");

/**
 * @openapi
 * /rb:
 *   get:
 *     summary: Retrieve a list of all RBs weekly performances
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
 *        description: Filter by RB's Team
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
router.get("/", rbController.getAllRBs);

module.exports = router;

const express = require('express');
const { createUser, getUsers } = require('../controllers/index');

const router = express.Router();

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Returns pong
 *     responses:
 *       200:
 *         description: Pong response
 */
router.get('/ping', (req, res) => {
  res.send('pong');
});


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieves a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 */
router.get('/users', getUsers);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Creates a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 162738495
 *                 name:
 *                   type: string
 *                   example: John Doe
 */
router.post('/users', createUser);

module.exports = router;
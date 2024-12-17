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


// Route to get user data
router.get('/users', getUsers);

// Route to create a new user
router.post('/users', createUser);

module.exports = router;
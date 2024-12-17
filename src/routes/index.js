const express = require('express');
const { createUser, getUsers } = require('../controllers/index');

const router = express.Router();

// Route to get user data
router.get('/users', getUsers);

// Route to create a new user
router.post('/users', createUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const { createNewUser } = require('../controllers/usersController');

router.post('/users', createNewUser )

module.exports = router


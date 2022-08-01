const express = require('express');
const router = express.Router();
const { createNewUser  } = require('../controllers/usersController');

router.post('/Login',createNewUser )

module.exports = router


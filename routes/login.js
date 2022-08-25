const { Router } = require('express');
const route = Router();
const { loginController } = require('../controllers/loginController');
const { userSuspendido } = require('../Helpers/validation');
const { body } = require('express-validator');

route.post('/',
body('correoUser').custom(userSuspendido),
loginController )

module.exports = route
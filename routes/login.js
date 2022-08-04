const { Router } = require('express')
const route = Router()
const { loginController } = require('../controllers/loginController')
// const { body } = require('express-validator')
// const {  } = require('../Helpers/validation')

route.post('/', loginController )

module.exports = route
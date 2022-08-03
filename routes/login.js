const { Router } = require('express')
const route = Router()
const {login} = require('../controllers/loginController')
// const { body } = require('express-validator')
// const {  } = require('../Helpers/validation')

route.post('/logearse', login)

module.exports = route
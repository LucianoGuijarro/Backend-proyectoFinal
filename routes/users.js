const { Router } = require('express')
const route = Router()
const { createNewUser } = require('../controllers/usersController');

route.post('/', createNewUser )

module.exports = route


// const { Router } = require('express')
// const route = Router()
// const { getCowsRegister, createCowsRegister, deleteCowsRegister, patchCowsRegister} = require('../controllers/cowsController')

// route.get('/' ,getCowsRegister)

// route.post('/',createCowsRegister)
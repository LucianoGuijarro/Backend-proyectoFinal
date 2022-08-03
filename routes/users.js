const { Router } = require('express')
const route = Router()
const { createNewUser, getAllUsers, getUserById } = require('../controllers/usersController');
const { body } = require('express-validator')
const { emailExist } = require('../Helpers/validation')

route.post('/',
body('correoUser').not().isEmpty().withMessage("El Email es Requerido").isEmail().withMessage("Ingrese un correo valido").custom(emailExist),
 createNewUser )

// route.get('/', getAllUsers)

// route.get('/:id', getUserById)

module.exports = route

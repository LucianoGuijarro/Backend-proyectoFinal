const { Router } = require('express')
const route = Router()
const { createNewUser, verTodos, getUserById } = require('../controllers/usersController');
const { body } = require('express-validator')
const { emailExist } = require('../Helpers/validation')

route.post('/agregarUsuario',
body('correoUser').not().isEmpty().withMessage("El Email es Requerido").isEmail().withMessage("Ingrese un correo valido").custom(emailExist),
 createNewUser )

 route.get('/verTodos', verTodos);

// route.get('/', getAllUsers)

// route.get('/:id', getUserById)

module.exports = route

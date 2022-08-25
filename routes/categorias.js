const express = require ('express');
const router = express.Router();
const { ensureUser } = require('../middleware/ensureUser');
const { agregarCategoria, verCategorias, eliminarCategoria } = require('../controllers/categorias.controller');
const { categoriaExiste } = require('../Helpers/validation');
const { body } = require('express-validator');

router.get('/verCategorias', verCategorias);
router.post('/agregarCategoria', ensureUser,
 body('nombre').custom(categoriaExiste), agregarCategoria);
router.delete('/eliminarCategoria/:id', ensureUser, eliminarCategoria)



module.exports = router
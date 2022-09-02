const express = require ('express');
const router = express.Router();
const { ensureAdmin } = require ('../middleware/ensureAdmin')
const { agregarCategoria, verCategorias, eliminarCategoria } = require('../controllers/categorias.controller');
const { categoriaExiste } = require('../Helpers/validation');
const { body } = require('express-validator');

router.get('/verCategorias', verCategorias);
router.post('/agregarCategoria', ensureAdmin,
 body('nombre').custom(categoriaExiste), agregarCategoria);
router.delete('/eliminarCategoria/:id', ensureAdmin, eliminarCategoria)



module.exports = router
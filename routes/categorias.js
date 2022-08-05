const express = require ('express');
const router = express.Router();
const { agregarCategoria, verCategorias, eliminarCategoria } = require('../controllers/categorias.controller');

router.get('/verCategorias', verCategorias);
router.post('/agregarCategoria', agregarCategoria);
router.delete('/eliminarCategoria/:id', eliminarCategoria)



module.exports = router
const express = require ('express');
const router = express.Router();
const { agregarCategoria, verCategorias } = require('../controllers/categorias.controller');

router.get('/verCategorias', verCategorias);
router.post('/agregarCategoria', agregarCategoria);



module.exports = router
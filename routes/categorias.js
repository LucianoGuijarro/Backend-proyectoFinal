const express = require ('express');
const router = express.Router();
const { ensureUser } = require('../middleware/ensureUser');
const { agregarCategoria, verCategorias, eliminarCategoria } = require('../controllers/categorias.controller');

router.get('/verCategorias', verCategorias);
router.post('/agregarCategoria', ensureUser, agregarCategoria);
router.delete('/eliminarCategoria/:id', ensureUser, eliminarCategoria)



module.exports = router
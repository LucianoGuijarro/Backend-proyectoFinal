const express = require('express');
const router = express.Router();
const { agregarComentario } = require ('../controllers/comentarios.controller')

router.post('/agregarComentario', agregarComentario)

module.exports = router;
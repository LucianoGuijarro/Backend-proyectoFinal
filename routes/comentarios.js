const express = require('express');
const router = express.Router();
const { agregarComentario, verComentariosPorJuego } = require ('../controllers/comentarios.controller')

router.post('/agregarComentario', agregarComentario)
router.get('/verComentariosPorJuego/:juegoPerteneciente', verComentariosPorJuego)

module.exports = router;
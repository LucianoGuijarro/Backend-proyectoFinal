const express = require('express');
const router = express.Router();
const { agregarComentario, verComentariosPorJuego, eliminarComentario } = require ('../controllers/comentarios.controller')
const { ensureUser } = require('../middleware/ensureUser');

router.post('/agregarComentario', agregarComentario)
router.get('/verComentariosPorJuego/:juegoPerteneciente', verComentariosPorJuego)
router.delete('/eliminarComentario/:id',ensureUser, eliminarComentario )

module.exports = router;
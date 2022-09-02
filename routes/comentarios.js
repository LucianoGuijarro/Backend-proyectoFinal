const express = require('express');
const router = express.Router();
const { agregarComentario, verComentariosPorJuego, eliminarComentario } = require ('../controllers/comentarios.controller')
const { ensureAdmin } = require ('../middleware/ensureAdmin')
const { ensureUser } = require ('../middleware/ensureUser')

router.post('/agregarComentario', ensureUser, agregarComentario)
router.get('/verComentariosPorJuego/:juegoPerteneciente', verComentariosPorJuego)
router.delete('/eliminarComentario/:id', ensureAdmin, eliminarComentario )

module.exports = router;
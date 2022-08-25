const express = require('express');
const router = express.Router();
const { ensureUser } = require('../middleware/ensureUser');
const { verJuegos, agregarJuego, verTodosCategoria, verJuegosCategoria, verJuegoDetalle, eliminarJuego, verDestacados, editarJuego } = require('../controllers/juegos.controlador');


router.get('/verJuegos', verJuegos);
router.get('/verJuego/:id', verJuegoDetalle);
router.get('/verDestacados', verDestacados);
router.get('/verJuegos/:categoria', verJuegosCategoria);
router.get('/verTodos/:categoria', verTodosCategoria);
router.post('/agregarJuego', ensureUser, agregarJuego);
router.delete('/eliminarJuego/:id', ensureUser, eliminarJuego);
router.patch('/editarJuego/:id', ensureUser, editarJuego);



module.exports = router


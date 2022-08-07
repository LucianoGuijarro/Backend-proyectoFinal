const express = require('express');
const router = express.Router();
const { verJuegos, agregarJuego, verTodosCategoria, verJuegosCategoria, verJuegoDetalle, eliminarJuego, verDestacados, editarJuego } = require('../controllers/juegos.controlador');


router.get('/verJuegos', verJuegos);
router.get('/verJuego/:id', verJuegoDetalle);
router.get('/verDestacados', verDestacados);
router.get('/verJuegos/:categoria', verJuegosCategoria);
router.get('/verTodos/:categoria', verTodosCategoria);
router.post('/agregarJuego', agregarJuego);
router.delete('/eliminarJuego/:id', eliminarJuego);
router.patch('/editarJuego/:nombre', editarJuego);



module.exports = router


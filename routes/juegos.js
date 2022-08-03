const express = require('express');
const router = express.Router();
const { verJuegos, agregarJuego, verTodosCategoria, verJuegosCategoria, verJuegoDetalle, eliminarJuego } = require('../controllers/juegos.controlador');


router.get('/verJuegos', verJuegos);
router.get('/verJuego/:id', verJuegoDetalle)
router.get('/verJuegos/:categoria', verJuegosCategoria);
router.get('/verTodos/:categoria', verTodosCategoria);
// router.get('/verJuegos/carreas', verJuegosCarreras);
// router.get('/verJuegos/accion', verJuegosAccion)
// router.get('/verJuegos/aventura', verJuegosAventura)
router.post('/agregarJuego', agregarJuego);
router.delete('/eliminarJuego/:id', eliminarJuego)



module.exports = router


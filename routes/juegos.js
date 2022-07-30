const express = require('express');
const router = express.Router();
const { verJuegos, agregarJuego, verJuegosCarreras, verJuegosAccion, verJuegosAventura } = require('../controllers/juegos.controlador');


router.get('/verJuegos/', verJuegos);
router.get('/verJuegos/carreas', verJuegosCarreras);
router.get('/verJuegos/accion', verJuegosAccion)
router.get('/verJuegos/aventura', verJuegosAventura)
router.post('/agregarJuego', agregarJuego);



module.exports = router


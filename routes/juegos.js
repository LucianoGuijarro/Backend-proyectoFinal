const express = require('express');
const router = express.Router();
const { verJuegos, agregarJuego } = require('../controllers/juegos.controlador');


router.get('/verJuegos', verJuegos);
router.post('/agregarJuego', agregarJuego);



module.exports = router


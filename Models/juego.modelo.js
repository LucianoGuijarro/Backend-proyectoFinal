const { model, Schema } = require('mongoose');


const juego = Schema({
    nombre: {
        type: String,
        required: true
    },
    sinopsis: {
        type: String,
        required: true
    },
    fechaLanzamiento: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    portada: {
        type: String,
        required: true
    },
    trailer: {
        type: String,
    },
    destacado: {
        type: Boolean,
        default: false
    },
    slider: {
        type: String,
        required: true
    },
    paginaCompra: {
        type: String,
        required: true
    }
});

module.exports = model('juego', juego);
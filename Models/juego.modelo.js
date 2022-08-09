const mongoose = require('mongoose');

const juego = mongoose.Schema({
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
        require: true
    },
    trailer: {
        type: String,
    },
    destacado: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('juego', juego);
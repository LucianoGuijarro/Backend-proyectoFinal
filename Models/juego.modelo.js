const mongoose = require('mongoose');

const juego = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    sinopsis: {
        type: String,
        require: true
    },
    fechaLanzamiento: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
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
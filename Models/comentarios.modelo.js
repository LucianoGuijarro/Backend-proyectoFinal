const mongoose = require('mongoose');

const Comentario = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    juegoPerteneciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'juego',
        required: true
    },
    contenido: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('comentario', Comentario)
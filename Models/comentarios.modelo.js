const mongoose = require('mongoose');

const Comentario = mongoose.Schema({
    Usuario: {
        type: String,
        required: true
    },
    JuegoPerteneciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'juego',
        required: true
    },
    Contenido: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('comentario', Comentario)
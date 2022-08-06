const mongoose = require('mongoose');

const Comentario = mongoose.Schema({
    Usuario: {
        type: String,
        require: true
    },
    JuegoPerteneciente: {
        type: String,
        require: true
    },
    Contenido: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('comentario', Comentario)
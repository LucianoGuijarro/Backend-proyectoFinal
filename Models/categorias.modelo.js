const mongoose = require('mongoose');

const categoria = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
}); 


module.exports = mongoose.model('categoria', categoria)
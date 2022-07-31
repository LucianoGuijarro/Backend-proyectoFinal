const mongoose = require('mongoose');

const categoria = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    }
}); 


module.exports = mongoose.model('categoria', categoria)
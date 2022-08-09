const mongoose = require('mongoose');

const User = mongoose.Schema({
    correoUser:{
        type: String,
        required: true
    },
    nickNameUser:{
        type:String,
        required: true
    },
    passwordUser:{
        type: String,
        required: true
    },
    countryUser:{
        type: String
    },
    rol: {
        type: String,
        default: "usuario"
    },
    suspendido: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('user', User);
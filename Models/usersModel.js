const mongoose = require('mongoose');

const User = mongoose.Schema({
    correoUser:{
        type: String,
        require: true
    },
    nickNameUser:{
        type:String,
        require:true
    },
    passwordUser:{
        type: String,
        require:true
    },
    countryUser:{
        type: String
    }
});

module.exports = mongoose.model('user', User);
const mongoose = require('mongoose');

const User = mongoose.Schema({
    userName:{
        type: String,
        require: true
    },
    paswordUser:{
        type: String,
        require:true
    },
    countryUser:{
        type: String
    }
});

module.exports = mongoose.model('user', User);
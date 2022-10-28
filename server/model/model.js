const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    desc : {
        type : String,
        required: true
    },
    genre : {
        type : String,
        required: true
    },
    lang : {
        type : String,
        required: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
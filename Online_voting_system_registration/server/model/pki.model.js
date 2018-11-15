const mongoose = require('mongoose');


var pkiScheama = new mongoose.Schema({
    publickey:{
        type:String,
        required:"can\'t empty",
    },
    registrationnumber:{
        type:String,
        required:"cannot empty"
    }
})

mongoose.model('pki',pkiScheama);
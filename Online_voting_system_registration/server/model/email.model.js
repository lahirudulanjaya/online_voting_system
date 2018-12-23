const mongoose = require('mongoose');

var emailSchema = new mongoose.Schema({
    registrationnumber: {
        type: String,
        required: ' can\'t be empty',

    },
    email:{
        type:String,
        
    },
    publickey:{
        type:String

    }
  });

  mongoose.model('email', emailSchema);
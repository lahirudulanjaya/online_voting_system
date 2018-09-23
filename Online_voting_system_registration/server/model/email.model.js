const mongoose = require('mongoose');

var emailSchema = new mongoose.Schema({
    registrationnumber: {
        type: String,
        required: ' can\'t be empty',

    },
    email:{
        type:String,
        required: 'can\'t be empty'
    }
  });

  mongoose.model('email', emailSchema);
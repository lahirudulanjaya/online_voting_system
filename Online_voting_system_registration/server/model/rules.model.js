const mongoose = require('mongoose');

var rulesSchema = new mongoose.Schema({
    rules :{
        type :String,
        required:'Please Enter rules',
    }

  });

  mongoose.model('rules', rulesSchema);

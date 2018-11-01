const mongoose = require('mongoose');

var rulesSchema = new mongoose.Schema({
    election: {
        type: String,
        required: 'Name can\'t be empty',

    },
    rules :{
        type :String,
        required:'Please Enter rules',
    }

  });

  mongoose.model('rules', rulesSchema);

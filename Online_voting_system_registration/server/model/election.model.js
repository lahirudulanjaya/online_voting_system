const mongoose = require('mongoose');

var electionSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: 'Name can\'t be empty',
        unique : true,
    },
    date:{
        type:Date,
        required: 'Date can\'t be empty'
    },
    stime: {
        type: String,
        required: 'Starting Time can\'t be empty'
    },
    etime: {
        type: String,
        required: 'Ending Time can\'t be empty',

    }
  });

  mongoose.model('election', electionSchema);

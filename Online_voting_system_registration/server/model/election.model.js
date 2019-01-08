const mongoose = require('mongoose');

var electionSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: 'Name can\'t be empty',
        unique : true,
    },
    stime: {
        type: Date,
        required: 'Starting Time can\'t be empty'
    },
    etime: {
        type: Date,
      

    },
    state :{
      default:false,
    }
  });

  mongoose.model('election', electionSchema);

const mongoose = require('mongoose');

var rulesSchema = new mongoose.Schema({
  rule: {
    type: String,
    required: 'Please Enter rules',
  }

});

mongoose.model('rules', rulesSchema);

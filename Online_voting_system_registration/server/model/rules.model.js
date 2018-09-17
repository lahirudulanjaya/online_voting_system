const mongoose = require('mongoose');

var rulesSchema = new mongoose.Schema({
    content: {
        type: String,
        required: 'Name can\'t be empty',

    }

  });

  mongoose.model('rules', rulesSchema);

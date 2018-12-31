const mongoose = require('mongoose');

var voteschema = new mongoose.Schema({
    VP:String,
    SE:String,
    TR:String,
    ED:String,
    CM:[String]


})

mongoose.model('vote',voteschema);


const mongoose = require('mongoose');

var voteschema = new mongoose.Schema({
    VP:string,
    SE:string,
    TR:string,
    ED:string,
    CM:string


})

mongoose.model('vote',voteschema);


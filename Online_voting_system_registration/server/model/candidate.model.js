const mongoose = require('mongoose');

var candidateschema =new mongoose.Schema(
    {
        election:{
            type:String
        },
        post:{
            type:String
        },
        candidatename:{
            type:String,
            unique : true
        },
        regnumber:{
            type:String,
            unique : true,
        },
        degree:{
            type:String,

        }

}
)
mongoose.model('candidate',candidateschema);

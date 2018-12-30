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
            required :'can\'t empty',
            unique : true,
        },
        regnumber:{
            type:String,
            required :'can\'t empty',
            unique : true,
        },
        degree:{
            type:String,
            required :'can\'t empty',
           
        }
        
}
)
mongoose.model('candidate',candidateschema);
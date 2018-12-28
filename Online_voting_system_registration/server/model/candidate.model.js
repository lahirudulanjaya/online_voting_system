const mongoose = require('mongoose');

var candidateschema =new mongoose.Schema(
    {
        election:{
            type:String
        },
        candidatename:{
            type:String,
            required :'can\'t empty',
            unique : true,
        },
        registrationnumber:{
            type:String,
            required :'can\'t empty',
            unique : true,
        },
        iscs:{
            type:String,
            required :'can\'t empty',
           
        },
        description:{
            type:String,
            required :'can\'t empty',
            
        }
}
)
mongoose.model('candidate',candidateschema);
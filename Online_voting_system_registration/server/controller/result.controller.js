const mongoose = require('mongoose');

const Vote = mongoose.model('vote');

module.exports.totalvotes=((req,res,next)=>{

    Vote.countDocuments({},function(err,count){
        if(err){
            res.send(err);
        }
        else{
            res.status(200).json(count);
        }
    })

})

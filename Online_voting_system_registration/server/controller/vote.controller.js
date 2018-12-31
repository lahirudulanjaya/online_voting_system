const mongoose = require('mongoose');

const Vote = mongoose.model('vote');

module.exports.postvote=(req,res,next)=>{
    var vote =new Vote();
    vote.VP = req.body.VP;
    vote.SE = req.body.SE;
    vote.TR = req.body.TR;
    vote.ED = req.body.ED;
    vote.CM = req.body.CM;

vote.save(function(err,doc){
    if(err){
        return next(err);
    }
    else{
        res.send(doc);
    }

});
}
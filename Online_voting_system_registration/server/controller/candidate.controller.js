const mongoose = require('mongoose');
const Candidate = mongoose.model('candidate');

module.exports.setcandidate = (req,res,next) => 
{
        var candidate = new Candidate();
        candidate.election =req.body.election;
        candidate.post=req.body.post;
        candidate.candidatename = req.body.candidatename;
        candidate.regnumber=req.body.registrationnumber;
        candidate.degree = req.body.iscs;

        candidate.save((err,doc) => {
            if (!err){
                res.send(doc);
            }
            else {
                
                if (err.code === 11000){
                    res.status(422).send('Data you entered has already been used');
                }                               
                else{
                    return next(err);
                    }
                    
            }

        });
        

       

}
module.exports.getcandidateprofiles=(req,res,next) =>{
    Candidate.find({},{},function(err, candidates) {
        if(err){
            res.send("something went wrong");
            next;
        }
        res.status(200).json(candidates);
        
      });
    
}
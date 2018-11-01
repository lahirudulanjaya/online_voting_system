const mongoose = require('mongoose');
const Candidate = mongoose.model('candidate');

module.exports.setcandidate = (req,res,next) => {
        var candidate = new Candidate();
        candidate.election =req.body.election;
        candidate.candidatename = req.body.candidatename;
        candidate.registrationnumber=req.body.registrationnumber;
        candidate.iscs = req.body.iscs;
        candidate.position=req.body.position;
        candidate.description=req.body.description;

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
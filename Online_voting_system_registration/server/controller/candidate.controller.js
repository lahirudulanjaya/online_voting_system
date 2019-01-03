const mongoose = require('mongoose');
const Candidate = mongoose.model('candidate');
const multer =require('multer');
var upload =multer({storage:store}).single('candidateimage');

var store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'.'+file.originalname);
    }
});


module.exports.uploadimage = (req,res,next) =>{
    upload(req,res,function(err){
        if(err){
           return res.status(422).send(err)
        }
        return res.json({originalname:req.file.originalname,uploadname:req.file.filename});
    })
}

module.exports.uploadi =(req,res,next) =>{
    
}



module.exports.setcandidate = (req,res,next) => 
{
        console.log(req.file);
        var candidate = new Candidate();
        candidate.election =req.body.election;
        candidate.post=req.body.post;
        candidate.candidatename = req.body.candidatename;
        candidate.regnumber=req.body.registrationnumber;
        candidate.degree = req.body.iscs;
        candidate.candidateimage =req.file.name;
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

module.exports.putcandidateprofile=(req,res,next) =>{
  
    var candidate= {
        candidatename:req.body.candidatename,
        regnumber:req.body.regnumber,
        degree:req.body.degree,
        post:req.body.post,

    };
    Candidate.findByIdAndUpdate({_id:req.body._id},{$set :candidate},{upsert:true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            res.status(422).send("update failed");
        }
    })
}
    

module.exports.deletecandidateprofile=(req,res,next) =>{
    Candidate.findOneAndRemove({_id:req.params.id},function(err,doc){
        if(err){
            res.status(404).json({ status: false, message: "delete faild" });
        }
        else{
            res.send(doc);
        }
    })
    
}
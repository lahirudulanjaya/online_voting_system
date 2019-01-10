const mongoose = require('mongoose');
const Election = mongoose.model('election');

module.exports.setelection = (req, res, next) => {
    var election = new Election();
    election.Name = req.body.Name;
    election.stime = req.body.stime;
    election.etime = req.body.etime;
    election.state=false;
    console.log(req.body.Name);

    election.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
          if (err.code == 11000)
              res.status(422).send('Data you entered has already been used');
          else
              return next(err);
        }
    });
}

module.exports.getallelections=(req,res,next)=>{
  Election.find({},{},(err,result)=>{
    if(err){
      res.send("something going wrong");
    }
    else{
      res.status(200).json(result);
    }
  })
}
module.exports.getcurrentelection=(req,res,next)=>{
  arr=[];
  Election.find({state:true},(err,result)=>{
    if(err){
      res.send("something went wrong");
    }
    else{
      
      res.status(200).json(result);
    }

  })
}
module.exports.startvote=(req,res,next)=>{
Election.findOneAndUpdate({Name:req.body.Name},{$set:{state:true}},function(err,result){
    if(!err){
      res.send(result);
    }
    else if(!result){
      res.status(422).send("not found");
    
    }
    else{
      res.status(422).send("Failed");
    }


})
}

module.exports.endvote=(req,res,next)=>{
  Election.findOneAndUpdate({Name:req.body.Name},{$set:{state:false}},function(err,result){
      if(!err){
        res.send(result);
      }
      else{
        res.status(422).send("Failed");
      }
  })
  }

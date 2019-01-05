const mongoose = require('mongoose');
const Election = mongoose.model('election');

module.exports.setelection = (req, res, next) => {
    var election = new Election();
    election.Name = req.body.Name;
    election.date = req.body.date;
    election.stime = req.body.stime;
    election.etime = req.body.etime;

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

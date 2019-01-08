const mongoose = require('mongoose');
const User = mongoose.model('user');
const randomstring = require('randomstring');
const mailer = require('../misc/mailer');

module.exports.verify = (req, res,next) => {
    User.findOneAndUpdate({
        randomstring : req.body.randomstring
    },
    {$set:{isvalid:true},
    $unset :{randomstring:1}
    },
    function(err,result){
        if(err)
            console.log(err);
        else if(!result){
            res.status(422).send("Invalid Key");
        }
        else{
            res.send(result);
        }
    });
}




module.exports.updaterandomstring=(req,res,next)=>
  {
    var rand =randomstring.generate();
    const html = `Hi there,
        <br/>
        Thank you for registering!
        <br/><br/>
        Please verify your email by typing the following token:
        <br/>
        Token: <b>${rand}</b>
        <br/>
        On the following page:
        <a href="http://localhost:4200/verify">http://localhost:4200/verify</a>
        <br/><br/>
        Have a pleasant day.` ;
  User.findOneAndUpdate({
    registrationnumber:req.body.registrationnumber
  },
  {
    $set:{randomstring:rand}
  },
  function(err,result){
      if(err)
          console.log(err);
      else if(!result){
          res.status(422).send("Invalid Key");
      }
      else{
          User.findOne({registrationnumber:req.body.registrationnumber},function(err,resu){
            if(res){
          mailer.sendEmail('evotingucsc@gmail.com', resu.email, 'Please verify your email!', html)
          res.send(result);
        }
        else if(!resu){
          res.status(422).send("Invalid Registration Number");
        }
      })
  }
})
}

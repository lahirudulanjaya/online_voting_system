const mongoose = require('mongoose');
var forge = require('node-forge');
const Vote = mongoose.model('vote');
const ctrlEmail = require('./email.controller');
const Email = mongoose.model('email');

function Votee(VP,SE,TR,ED,CM,registrationnumber) {
    this.VP=VP,
    this.SE=SE,
    this.TR=TR,
    this.ED=ED,
    this.CM=CM,
    this.registrationnumber=registrationnumber
  }
module.exports.postvote=(req,res,next)=>{
     var vote =new Vote();
     vote.VP = req.body.VP;
     vote.SE = req.body.SE;
     vote.TR = req.body.TR;
     vote.ED = req.body.ED;
     vote.CM = req.body.CM;
 var sigg = req.body.signature;
 var votee= new Votee(req.body.VP,req.body.SE,req.body.TR,req.body.ED,req.body.CM,req.body.registrationnumber);
//var publickey=ctrlEmail.findpub(req.body.registrationnumber);


Email.findOne({registrationnumber:req.body.registrationnumber},function(err,result){
     if(err)
             throw err;
     else
     {
         console.log(result.publickey);
         let pubbKey =  forge.pki.publicKeyFromPem(result.publickey);
         console.log(pubbKey);
         var bytes = forge.util.hexToBytes(sigg);
         const mmd = forge.md.sha256.create();
         mmd.update(JSON.stringify(votee),"utf8");
         console.log(JSON.stringify(votee));
         try{
         var verified = pubbKey.verify(mmd.digest().bytes(), bytes);
         if(verified){
         vote.save(function(err,doc){
                  if(err){
                      return next(err);
                  }
                  else{
                      res.send(doc);


                  }
              });
            }
            else{
                res.status(422).send("you are not valid voter");
            }
          }
          catch(err){
            res.status(422).send("You are not a valid user");
          }

      }
});

}

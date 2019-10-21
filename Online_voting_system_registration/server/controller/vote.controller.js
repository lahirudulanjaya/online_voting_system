const mongoose = require('mongoose');
var forge = require('node-forge');
const Vote = mongoose.model('vote');
const ctrlEmail = require('./email.controller');
const Email = mongoose.model('email');
const User = mongoose.model('user');

//class Votee
function Votee(PR,VP,SE,TR,ED,CM,registrationnumber) {
    this.PR=PR,
    this.VP=VP,
    this.SE=SE,
    this.TR=TR,
    this.ED=ED,
    this.CM=CM,
    this.registrationnumber=registrationnumber
  }
module.exports.postvote=(req,res,next)=>{
     var vote =new Vote();
     vote.PR = req.body.PR;
     vote.VP = req.body.VP;
     vote.SE = req.body.SE;
     vote.TR = req.body.TR;
     vote.ED = req.body.ED;
     vote.CM = req.body.CM;
 var sigg = req.body.signature;
 var votee= new Votee(req.body.PR,req.body.VP,req.body.SE,req.body.TR,req.body.ED,req.body.CM,req.body.registrationnumber);
// get the vote object from client side

//search the corresponding public key to user 
Email.findOne({registrationnumber:req.body.registrationnumber},function(err,result){
     if(err)
             throw err;
     else
     {       
        
        let pubbKey =  forge.pki.publicKeyFromPem(result.publickey); // covert the pem format to forged public key
        
        var signaturebytes = forge.util.hexToBytes(sigg);  //convert signature to bytes
       
         const mmd = forge.md.sha256.create();  
         mmd.update(JSON.stringify(votee),"utf8"); // get vote object and hash it


         try{
         var verified = pubbKey.verify(mmd.digest().bytes(), signaturebytes); // compare the two hash values
         if(verified){
         vote.save(function(err,doc){
                  if(err){
                      return next(err);
                  }
                  else{
                    User.findOneAndUpdate({registrationnumber:req.body.registrationnumber},{$set:{isvote:true}},(err,result)=>{
                        if(err){
                            res.status(422).send(err);
                        }
                        else{
                          res.send(doc);
                        }

                    })
                  }
              });
            }
            else{
                res.status(422).send("you are not valid voter");
            }
          }
          catch(err)
          {
            res.status(422).send("You are not a valid user");
          }

      }
});

}

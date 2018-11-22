const mongoose = require('mongoose');
const  Pki= mongoose.model('pki');
var generateRSAKeypair = require('generate-rsa-keypair')

var arr =[];

var private;
module.exports.generate = (req, res, next) => {
var pki = new Pki();
pki.registrationnumber = req.body.registrationnumber;
pki.publickey = pair.public;
private = pair.private;

pki.save((err,doc)=>{
    if(!err){
        res.send(doc);
    }
    else{
        return next(err);
    }
})

}
module.exports.getkey=(req,res,next)=>{


   var pair = generateRSAKeypair()

   var pri =pair.private;
   var pub =pair.public;
  
    arr[1]=pri;
    arr[0]=pub;
    console.log(pub);
    res.send(arr);
    
}



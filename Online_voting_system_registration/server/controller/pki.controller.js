const mongoose = require('mongoose');
const  Pki= mongoose.model('pki');


var generateRSAKeypair = require('generate-rsa-keypair')

var pair = generateRSAKeypair()
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
module.exports.generate=(req,res,next)=>{
   // console.log(pair.private);
   var pri =pair.private;
   var pub =pair.public;
   var arr =[];
    arr.push(pub);
    arr.push(pri);
    res.send(arr);
    
}



const mongoose = require('mongoose');
const  Email= mongoose.model('email');
var generateRSAKeypair = require('generate-rsa-keypair')
var forge = require('node-forge');
var arr =[];

var private;
module.exports.savepki = (req, res, next) => {
Email.findOneAndUpdate({registrationnumber:req.body.registrationnumber},{$set:{publickey:req.body.publickey}},
function(err,result){
    if(err)
        console.log(err);
    else if(!result){
        res.status(422).send("Invalid Key");
    }
    else
    {
        res.send(result);
    }
});
}
module.exports.putpki=(req,res,next) =>{
  
    var email= {
        registrationnumber:req.body.registrationnumber,
        email:req.body.email,
        publickey:req.body.publickey

    };
    Email.findByIdAndUpdate({_id:req.body._id},{$set :email},{upsert:true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            res.status(422).send("update failed");
        }
    })
}





module.exports.getkey=(req,res,next)=>{


   var pair = generateRSAKeypair()

    pri =pair.private;
    pub =pair.public;
  
    arr[1]=pri;
    arr[0]=pub;
    console.log(pub);
    res.send(arr);
    
}

module.exports.downloadprivate=(req,res,next)=>{ 
    res.sendFile(arr[1]);
}




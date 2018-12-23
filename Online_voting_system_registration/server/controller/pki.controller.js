const mongoose = require('mongoose');
const  Email= mongoose.model('email');
var generateRSAKeypair = require('generate-rsa-keypair')

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
}
);
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
    res.setHeader('Content-type', "application/octet-stream");

    res.setHeader('Content-disposition', 'attachment; filename=privatekey.txt');
    
    res.json(pri);
}



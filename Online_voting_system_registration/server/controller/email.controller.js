const mongoose = require('mongoose');
const Email = mongoose.model('email');

module.exports.setemail = (req, res, next) => {
    var email = new Email();
    email.email = req.body.email;
    email.registrationnumber = req.body.registrationnumber;
    email.publickey = req.body.publickey;
   
    email.save((err, doc) => {

        if (!err)
            res.send(doc);
          else
              return next(err);    

    });

}

module.exports.pki=(req,res,next)=>{
    Email.findOne({registrationnumber:req.params.id},function(err,result){
        if(err)
                throw err;
        else if(result.publickey)
                res.send(false);
        else
                res.send(true);
});
}
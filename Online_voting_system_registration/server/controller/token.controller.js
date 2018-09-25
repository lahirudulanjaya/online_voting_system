const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports.verify = (req, res) => {
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
            res.status(422).send("Invalid Token");
        }
        else{
            res.send(result);
        }
    });
}




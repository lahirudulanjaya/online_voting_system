const mongoose = require('mongoose');
const Email = mongoose.model('email');

module.exports.setemail = (req, res, next) => {
    var email = new Email();
    email.email = req.body.email;
    email.registrationnumber = req.body.registrationnumber;
   
    email.save((err, doc) => {

        if (!err)
            res.send(doc);
          else
              return next(err);

        

    });
}
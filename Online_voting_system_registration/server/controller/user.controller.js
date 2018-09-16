const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('user');
const passport = require('passport');

const _ = require('lodash');


module.exports.register = (req, res, next) => {
    var user = new User();
    user.userName = req.body.userName;
    user.registrationnumber=req.body.registrationnumber;
    user.email = req.body.email;
    user.password = req.body.password;
    user.cpassword=req.body.cpassword;


    user.save((err, doc) => {

        if (!err)
            res.send(doc);
        else {
          if (err.code == 11000)
              res.status(422).send('Data you entered has already been used');
          else
              return next(err);

        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered user
        if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(401).json(info);
    })(req, res);
}
module.exports.userprofile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['userName','email','registrationnumber']) });
        }
    );
}

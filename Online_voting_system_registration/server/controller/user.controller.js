const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('user');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
          if (err.code == 11000)
              res.status(422).send(['Duplicate email adrress found.']);
          else
              return next(err);

        }

    });
}

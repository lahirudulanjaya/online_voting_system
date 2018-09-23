const mongoose = require('mongoose');
const Rules = mongoose.model('rules');

module.exports.setrules = (req, res, next) => {
    var rules = new Rules();
    rules.content=req.body.content;


    rules.save((err, doc) => {

        if (!err)
            res.send(doc);
        else
            return next(err);

        });

      }

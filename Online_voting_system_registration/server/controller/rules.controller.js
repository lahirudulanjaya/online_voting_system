const mongoose = require('mongoose');
const Rules = mongoose.model('rules');

module.exports.setrules = (req, res, next) => {
    var rules = new Rules();
    rules.rules = req.body.rules;


    rules.save((err, doc) => {

        if (!err)
            res.send(doc);
        else
            return next(err);

    });

}

// Retrieving rules
module.exports.getRules = ((req, res, next) => {
    Rules.find({}, {}, function(err, rules) {
        if(err) {
            res.send(err);
            next;
        }
        res.status(200).json(rules);
    })
})

// Updating rules
module.exports.putRules = ((req, res, next) => {
    var rule = {
        rule: req.body.rule
    };

    Rules.findByIdAndUpdate({_id: req.body._id}, {$set: rule}, {upsert: true}, (err, doc) => {
        if(!err){
            res.send(doc);
        }
        else{
            res.status(422).send("update failed");
        }
    })
})

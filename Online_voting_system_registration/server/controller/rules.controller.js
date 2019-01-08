const mongoose = require('mongoose');
const Rules = mongoose.model('rules');

module.exports.setrules = (req, res, next) => {
    var rules = new Rules();
    rules.rule = req.body.rules;


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
            res.status(422).send("Update failed");
        }
    })
})

// Deleting rules (one by one)
module.exports.deleteRule = ((req, res, next) => {
    Rules.findOneAndRemove({
        _id: req.params.id
    }, function(err, doc) {
        if(err) {
            res.status(404).json({
                status: false,
                message: "Delete failed"
            })
        }
        else {
            res.send(doc);
        }
    })
})

// Deleting all rules at once
module.exports.deleteAllRules = ((req, res, next) => {
    Rules.deleteMany({}, function (err) {
        if(err) {
            res.status(404).json({
                status: false,
                message: "Delete failed"
            })
        }
        else {
            res.send("Success");
        }
    })
})
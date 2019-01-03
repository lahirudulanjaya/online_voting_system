const mongoose = require('mongoose');

const Vote = mongoose.model('vote');
const Candidate = mongoose.model('candidate');

module.exports.totalvotes = ((req, res, next) => {
    Vote.countDocuments({}, function (err, count) {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200).json(count);
        }
    })

})

module.exports.totalCandidates = ((req, res, next) => { 
    Candidate.countDocuments({}, function (err, count) {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200).json(count);
        }
    })
})

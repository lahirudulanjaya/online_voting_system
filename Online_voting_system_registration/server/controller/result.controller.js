const mongoose = require('mongoose');
const Vote = mongoose.model('vote');
const Candidate = mongoose.model('candidate');
const Voter = mongoose.model('user');

module.exports.totalVotes = ((req, res, next) => {
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

module.exports.totalRegisteredVoters = ((req, res, next) => {
    Voter.countDocuments({}, function (err, count) {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200).json(count);
        }
    })
})

module.exports.vicePresidentResult = ((req, res, next) => {
    Vote.aggregate([{
        $group: {
            _id: '$VP',
            count: { $sum: 1 }
        }
    }], function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200).json(result);
        }
    })
})

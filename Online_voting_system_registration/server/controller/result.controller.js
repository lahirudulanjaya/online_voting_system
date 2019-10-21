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

// President
module.exports.presidentResult = ((req, res, next) => {
    Vote.aggregate([{
        $group: {
            _id: '$PR',
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

// Vice president
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

// Secretary
module.exports.secretaryResult = ((req, res, next) => {
    Vote.aggregate([{
        $group: {
            _id: '$SE',
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

// Treasurer
module.exports.treasurerResult = ((req, res, next) => {
    Vote.aggregate([{
        $group: {
            _id: '$TR',
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

// Editor
module.exports.editorResult = ((req, res, next) => {
    Vote.aggregate([{
        $group: {
            _id: '$ED',
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

// Committee Member
module.exports.committeeResult = ((req, res, next) => {
    Vote.aggregate([
        {
            $unwind: '$CM'
        },
        {
            $group: {
                _id: '$CM',
                count: { $sum: 1 }
            }
        }
    ], function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200).json(result);
        }
    })
})

// Get name from Candidates collection
module.exports.getCandidateName = ((req, res, next) => {
    Candidate.findOne({ regnumber: req.params.id }, "candidatename",
        function (err, result) {
            if (err) {
                res.send(err);
            }
            else {
                res.status(200).json(result);
            }
        })
})

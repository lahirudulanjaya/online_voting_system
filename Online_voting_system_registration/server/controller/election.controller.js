const mongoose = require('mongoose');
const Election = mongoose.model('election');

module.exports.setelection = (req, res, next) => {
    var election = new Election();
    election.Name = req.body.Name;
    election.date = req.body.date;
    election.stime = req.body.stime;
    election.etime = req.body.etime;



    election.save((err, doc) => {

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

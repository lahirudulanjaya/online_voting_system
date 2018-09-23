const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('user');

passport.use(
    new localStrategy({ usernameField: 'userName' },
        (username, password, done) => {
            User.findOne({ userName: username },
                (err, user) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!user)
                        return done(null, false, { message: 'Invalid Username' });
                    // wrong password
                    else if (!user.verifyPassword(password))
                        return done(null, false, { message: 'Invalid Password.' });
                    // authentication succeeded
                    else
                        return done(null, user);
                });
        })
);

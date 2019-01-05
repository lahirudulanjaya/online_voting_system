const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const ctrluser = require('../controller/user.controller');
var User = mongoose.model('user');
var SerialPort = require('serialport');


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
                    // unconfiremed Email
                    else if(!user.verifyEmail())
                        return done(null,false, {message : 'please verify email address'});

                   // else if(!ctrluser.verifyphonenumber(user.registrationnumber)){
                     //   return done(null,false,{message:' please verify your phone number'});
                   // }
                    // authentication succeeded
                    else{
                      // ctrluser.sendsms(user.phonenumber);
                        return done(null, user);

                    }
                });
        })
);
function gsm_message_sending(serial, message ,phone_no) {
    serial.write("AT+CMGF=1");
     serial.write('\r');
     serial.write("AT+CMGS=\"" + phone_no + "\"");
     serial.write('\r');
     serial.write(message);
     serial.write(Buffer([0x1A]));
     serial.write('^z');
 }

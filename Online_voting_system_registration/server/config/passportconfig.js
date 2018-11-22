const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('user');
var SerialPort = require('serialport');
var otpGenerator = require('otp-generator')
var otp =otpGenerator.generate(6, { upperCase: false, specialChars: false });
var port = new SerialPort("/dev/ttyUSB0", {
  baudRate: 9600,
  dataBits: 8,
  parity: 'none'
});

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
                    // authentication succeeded
                    else{
                        
                           
                            console.log('Serial communication open');
                            port.write("AT");
                            port.write('\r');
                            port.write("AT+CMGF=1");
                            port.write('\r');
                            port.write("AT+CMGS=\"" + user.phonenumber + "\"");
                            port.write('\r');
                            port.write(otp); 
                            port.write(Buffer([0x1A]));
                            port.write('^z');
                        
                        

                        console.log(otp);
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
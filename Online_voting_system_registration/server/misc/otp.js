var SerialPort = require('serialport');
var otpGenerator = require('otp-generator')
 
var otp =otpGenerator.generate(6, { upperCase: false, specialChars: false });
var port = new SerialPort("/dev/ttyUSB0",{
  baudRate: 9600,
  dataBits: 8,
  parity: 'none'
});

console.log('port is now open');
module.exports.sendotp = ()=>{
port.on("open", function () {

    console.log('Serial communication open');
    port.write("AT");
    port.write('\r');
    port.on('data', function(data) {
        console.log("Received data: " + data);
    });



    gsm_message_sending(port, ("%s",otp), "0758034032"); 
});
}

function gsm_message_sending(serial, message ,phone_no) {
   serial.write("AT+CMGF=1");
    serial.write('\r');
    serial.write("AT+CMGS=\"" + phone_no + "\"");
    serial.write('\r');
    serial.write(message); 
    serial.write(Buffer([0x1A]));
    serial.write('^z');
}
module.exports.gsm_message_sending;
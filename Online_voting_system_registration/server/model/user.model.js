const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');


var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: 'Full name can\'t be empty',
        unique : true,
    },
    registrationnumber:{
        type:String,
        required: 'Registration Number can\'t be empty',
        unique :true,
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true,
       // validate:verifyEmail
    },
    phonenumber: {
        type: String,
        required: 'Phone number can\'t be empty',
        unique: true,
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [8,'Password must be atleast 8 character long']
    },
    cpassword:{

        type:String,
        required: 'Password can\'t be empty',
    },
    saltSecret: String,
    
    randomstring: {

        type: String,
        
    },

    isvalid :Boolean,
    
    isadmin :false,

    rsa :{
        type:Boolean,
        default:true
    }

});
// Custom validation for email

userSchema.path('email').validate((val) => {
   emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return emailRegex.test(val);
}, 'Invalid e-mail.');





userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.cpassword= hash;
            this.saltSecret = salt;
            this.isvalid = false;
            next();
        });
    });
});

//methods
userSchema.methods.verifyPassword = function(password)
{
  return bcrypt.compareSync(password,this.password);
}

userSchema.methods.verifyEmail = function()
{
    return this.isvalid;
}



userSchema.methods.generateJwt = function () {
    return jwt.sign({
        _id: this._id
    }, process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });

}
mongoose.model('user', userSchema);

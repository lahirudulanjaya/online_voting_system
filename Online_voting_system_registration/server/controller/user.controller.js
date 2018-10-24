const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('user');
const passport = require('passport');
const Email = mongoose.model('email');
const mailer = require('../misc/mailer');
const _ = require('lodash');
const randomstring = require('randomstring');
const ObjectId =require('mongoose').Types.ObjectId;

module.exports.register = (req, res, next) => {
    var user = new User();
    user.userName = req.body.userName;
    user.registrationnumber=req.body.registrationnumber;
    user.email = req.body.email;
    user.phonenumber=req.body.phonenumber;
    user.password = req.body.password;
    user.cpassword=req.body.cpassword;
    user.randomstring =randomstring.generate();
    user.isadmin =false;
    const html = `Hi there,
        <br/>
        Thank you for registering!
        <br/><br/>
        Please verify your email by typing the following token:
        <br/>
        Token: <b>${user.randomstring}</b>
        <br/>
        On the following page:
        <a href="http://localhost:4200/verify">http://localhost:4200/verify</a>
        <br/><br/>
        Have a pleasant day.` ;

console.log(user.randomstring);


        Email.findOne({registrationnumber:user.registrationnumber},'email',function(err,result){
            if(err)
                throw err;
            else if(!result)
                res.status(422).send('Details of email not found');
            else{
                if(result.email==user.email){
                    user.save((err, doc) => {
                        if (!err){
                            
                            res.send(doc);
                            mailer.sendEmail('evotingucsc@gmail.com', user.email, 'Please verify your email!', html)
                            
                        }

                        else 
                        {
                                if (err.code === 11000){
                                    res.status(422).send('Data you entered has already been used');
                                }                               
                                else{
                                    return next(err);
                                    }
                        }
                        });

                }
                else{
                    res.status(422).send('Enter Correct Email Address');
                }

            }
        });
    }




module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered user
        if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(401).json(info);
    })(req, res);
}
module.exports.userprofile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['userName','email','registrationnumber','phonenumber']) });
        }
    );
}

module.exports.getuserprofiles=(req,res,next) =>{
    User.find({isadmin:false,isvalid:true},{userName:true,email:true,registrationnumber:true,phonenumber:true}, function(err, users) {
        if(err){
            res.send("something went wrong");
            next;
        }
        res.status(200).json(users);
        
      });
    
}

module.exports.putuserprofile=(req,res,next) =>{
  
    var user= {
        userName:req.body.userName,
        registrationnumber:req.body.registrationnumber,
        phonenumber:req.body.phonenumber,
        email:req.body.email,

    };
    User.findByIdAndUpdate({_id:req.body._id},{$set :user},{upsert:true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            res.status(422).send("update failed");
        }
    })
}
    

module.exports.deleteuserprofile=(req,res,next) =>{
    User.findOneAndRemove({_id:req.params.id},function(err,doc){
        if(err){
            res.status(404).json({ status: false, message: "delete faild" });
        }
        else{
            res.send(doc);
        }
    })
    
}
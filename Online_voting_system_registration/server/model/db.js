const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://laiya:123@ucsc-union-election-7i44v.mongodb.net/MEAN?retryWrites=true",
{ useNewUrlParser: true },(err) =>{
  if(!err){
    console.log("connection success");
  }
  else{
    console.log("error in connection: "+ JSON.stringify(err,undefined,2));
  }
})

require('./user.model');
require('./election.model');
require('./rules.model');
require('./email.model');
require('./candidate.model');
require('./pki.model');
require('./vote.model');
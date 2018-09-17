const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb_url,(err) =>{
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

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/laiya',(err,db) => {
  if(err){
    return console.log("unable to connect");
  }
  console.log("connect");
  var database = db.db('laiya');
  database.collection('infomation').insertOne({
    name:'laiya',
    password : '12345'

  },(err,result) => {
    if(err){
    console.log("unable to connect",err);
  }
  console.log(result.ops);

  })
  db.close();

});

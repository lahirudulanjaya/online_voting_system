require('./config/config');
require('./model/db');

require('./config/passportconfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const rtsIndex = require('./router/index.router');

var app = express();

// app.use(function(req, res, next){
//     //set headers to allow cross origin request.
//     res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//     res.append('Access-Control-Allow-Credentials', true);
//     next();
//     });
// middleware
// connect nodejs and angular
app.use(cors());
app.use(bodyParser.json());
// use passport for authentication
app.use(passport.initialize());

app.use('/api',rtsIndex);


app.use((err, req, res, next) => {
    if(err.name === 'ValidationError'){
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});
//start server
app.listen(process.env.PORT, ()=>
console.log('server started at port :${process.env.PORT}')
);


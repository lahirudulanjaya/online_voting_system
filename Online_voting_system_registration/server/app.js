require('./config/config');
require('./model/db');

require('./config/passportconfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const rtsIndex = require('./router/index.router');

var app = express();

// app.use(function(req, res, next) {
//     //set headers to allow cross origin request.
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         next();
//     });
//middleware
// connect nodejs and angular
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

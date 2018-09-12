require('./config/config');
require('./model/db');
require('./config/passportconfig');

const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');
const passport = require('passport');


const rtsIndex = require('./router/index.router');

var app = express();
//middleware
//app.get('/',(req,res) => res.send("hello "));
app.use(cors());// run both node and angular
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/api',rtsIndex);
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});
//start server
app.listen(process.env.PORT, ()=>
console.log('server started at port :${process.env.PORT}')
);

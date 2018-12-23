require('./config/config');
require('./model/db');

require('./config/passportconfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const rtsIndex = require('./router/index.router');

var app = express();


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


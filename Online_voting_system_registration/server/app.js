require('./config/config');
require('./model/db');


const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');

const rtsIndex = require('./router/index.router');

var app = express();
//middleware
app.use(bodyParser.json()); //to pass json data to nodejs
app.use(cors());// run both node and angular
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

'use strict'

//Required's to execute app
const config = require('./config');
const conn = require('./connection');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Execute app
const app = express();

//Settings
const API_URL = config.api + config.version;

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    // Pass to next layer of middleware
    next();
});

//Static files
app.use(express.static(__dirname + '/public'));

//Check if connection is successfully
conn.authenticate()
    .then(() => {
        console.log('Connect Successfully')

        //Run API
        app.listen(config.port, () => {
            console.log('Server on port:', config.port);
        });
    })
    .catch((e) => {
        //check if an error has ocurred in database connection
        console.log('Database connection error:', e)
    })
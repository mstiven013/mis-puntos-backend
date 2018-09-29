'use strict'

//Required's to execute app
const config = require('./config');
const Sequelize = require('sequelize');

//Generate database connection infortmation
const connection = new Sequelize(config.dbName, config.dbUser, config.dbPassword, { 
    host: config.dbHost,
    dialect: 'mysql',
    operatorsAliases: false
});

module.exports = connection;
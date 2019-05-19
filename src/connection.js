'use strict'

//Required's to execute app
const config = require('./config');
const Sequelize = require('sequelize');

//Generate database connection infortmation
const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, { 
    host: config.dbHost,
    dialect: 'mysql',
    operatorsAliases: false
});

const User = require('./components/users/usersModel');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = User(sequelize, Sequelize);

module.exports = db;
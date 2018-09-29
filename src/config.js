'use strict'

const config = {
    name: 'Mis puntos backend', // Application name
    version: '1.0', // Application version
    api: '/api/', // API url
    port: process.env.PORT || 3000, // Proccess port
    secret: 'mysecretkeyapi', // Secret api key
    dbName: 'mispuntos', // Database name
    dbUser: 'root', // Database user name
    dbPassword: '', // Database user password
    dbHost: 'localhost' // Database host
}

module.exports = config;
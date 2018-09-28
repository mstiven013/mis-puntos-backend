'use strict'

const config = {
    name: 'Mis puntos backend',
    version: '1.0',
    api: '/api/',
    port: process.env.PORT || 3000,
    secret: 'mysecretkeyapi',
    dbAuth: {},
    db: 'localhost',
}

module.exports = config;
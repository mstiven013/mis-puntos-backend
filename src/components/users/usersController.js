'use strict'

const db = require('../../connection');
const User = db.users;
const controller = {};

//Controller function to find all users
controller.findAll = (req, res) => {
    User.findAll()
        .then((data) => {
            return res.send(data);
        })
        .catch((err) => {
            return res.status(500).send({'msg': `An error has ocurred in server: ${err}`})
        })
}

module.exports = controller;
'use strict'

const controller = require('./usersController');
const express = require('express');
const router = express.Router();

router.get('/', controller.findAll);

module.exports = router;
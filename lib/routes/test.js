'use strict';

const express = require('express');
const router = express.Router();

const util = require('./../modules/util');

router.get('/test-route', function(req, res){

    res.json(util.say('Hello wooorld!'));

});

module.exports = router;

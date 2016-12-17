'use strict';

const express = require('express');
const router = express.Router();

router.get('/test-route', function(req, res){

    res.send();

});

module.exports = router;

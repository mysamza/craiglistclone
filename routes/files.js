'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.download();
});

module.exports = router;
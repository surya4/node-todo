var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/profile');
});

module.exports = router;

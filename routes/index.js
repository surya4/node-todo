var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../config/db');

router.get('/', function(req, res) {
  db.getConnection(function(err, connection) {
    if (!err) {
      connection.query('SELECT * from user', function(err, rows) {
        res.render('pages/index', {
          data: JSON.stringify(rows)
        })
      })
    } else {
      console.log('Error while performing Query.');
      console.log(err);

    }
  });
});

module.exports = router;

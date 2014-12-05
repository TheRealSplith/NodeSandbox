var express = require('express');
var r = require('rethinkdb')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  conn = r.connect({
    host: 'localhost',
    port: 28015,
    db: 'test'
  }, function(err, conn) {
    r.db('test').tableCreate('newTable', {primaryKey: 'id'}).run(conn, function(error, cursor) { 
      res.render('index', {title: "Table Created: " });
    });
  });
});

module.exports = router;

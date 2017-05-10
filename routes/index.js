var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'test', subtitle: 'test' });
});

/* GET user page */
router.get('/user', function(req, res, next) {
  res.render('user', { title: 'test u'});
});

module.exports = router;

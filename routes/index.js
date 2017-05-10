var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 'title': 'test', 'subtitle': 'test' });
});

module.exports = router;

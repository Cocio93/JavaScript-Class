var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Called INdex ')
  res.render('index', { title: 'Joke Paradise' });
});

module.exports = router;

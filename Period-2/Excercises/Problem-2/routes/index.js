var express = require('express');
var session = require("express-session");
var router = express.Router();
var id = 0;

router.get('/', function(req, res, next) {
  var username = "";
  if (req.session.userName) {
    username = req.session.userName;
  }
  res.render('index', { title: 'Joke Paradise', username: username});
});

router.post('/login', function(req, res, next) {
  req.session.userName = req.body.userName;
  res.redirect('/');
});

router.get('/logout', function(req, res, next) {
  if (req.session.userName) {
    req.session.destroy();
    res.redirect('/')
  } else {
    res.render('index', {title: "Joke Paradise", username: "", message: "You are not logged in"})
  }
});

module.exports = router;

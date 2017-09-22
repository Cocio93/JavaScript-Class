var express = require('express');
var router = express.Router();
var path = require("path");
var jokeModel = require('../model/jokes.js');

router.get('/', function(req, res, next) {
    randomJoke = jokeModel.jokes.getRandomJoke();
    res.render('randomJoke', { randomJoke: randomJoke });
  });


module.exports = router;

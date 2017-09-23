var express = require('express');
var router = express.Router();
var path = require("path");
var jokeModel = require('../model/jokes.js');

router.get('/', function(req, res, next) {
    res.render('jokes', { jokes: jokeModel.jokes.allJokes });
  });

router.get('/random', function(req, res, next) {
    randomJoke = jokeModel.jokes.getRandomJoke();
    res.render('randomJoke', { randomJoke: randomJoke });
});

router.get('/add', function(req, res, next) {
    res.render('addJoke');
});

router.post('/addJoke', function(req, res, next) {
    var joke = req.body;
    console.log(joke);
    jokeModel.jokes.addJoke(joke.joke);
    res.render('addjoke', { jokeAdded: 'Joke successfully added'});
});

module.exports = router;

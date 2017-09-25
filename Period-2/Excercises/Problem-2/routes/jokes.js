var express = require('express');
var router = express.Router();
var path = require("path");
var jokeModel = require('../model/jokes.js');

router.get('/', function(req, res, next) {
    if (req.session.jokesCount) {
        req.session.jokesCount++;
    } else {
        req.session.jokesCount = 1;
    }
    res.render('jokes', { jokes: jokeModel.jokes.allJokes, username: req.session.userName });
  });

router.get('/random', function(req, res, next) {
    if (req.session.jokeCount) {
        req.session.jokeCount++;
    } else {
        req.session.jokeCount = 1;
    }
    randomJoke = jokeModel.jokes.getRandomJoke();
    res.render('randomJoke', { randomJoke: randomJoke });
});

router.get('/add', function(req, res, next) {
    if (req.session.addJokeCount) {
        req.session.addJokeCount++;
    } else {
        req.session.addJokeCount = 1;
    }
    res.render('addJoke');
});

router.post('/addJoke', function(req, res, next) {
    var joke = req.body.joke;
    jokeModel.jokes.addJoke(joke);
    res.render('addjoke', { jokeAdded: 'Joke successfully added'});
});

module.exports = router;

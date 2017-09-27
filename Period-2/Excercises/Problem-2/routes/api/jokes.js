var express = require('express');
var router = express.Router();
var path = require("path");
var jokeModel = require('../../model/jokes.js');

router.get('/', function(req, res, next) {
    if (req.session.jokesCount) {
        req.session.jokesCount++;
    } else {
        req.session.jokesCount = 1;
    }
    res.send({ jokes: jokeModel.jokes.allJokes});
  });

router.get('/random', function(req, res, next) {
    if (req.session.jokeCount) {
        req.session.jokeCount++;
    } else {
        req.session.jokeCount = 1;
    }
    randomJoke = jokeModel.jokes.getRandomJoke();
    res.send('joke', { randomJoke: randomJoke });
});

router.post('/add', function(req, res, next) {
    var joke = req.body.joke;
    jokeModel.jokes.addJoke(joke);
    res.send({ message: 'Joke successfully added'});
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    var jokes = jokeModel.jokes.allJokes;
    if (id > jokes.length) {
        throw new Error("Not so many jokes");
    } else {
        req.body.joke = jokes[id];     
        res.send({joke: req.body.joke}, 200 );
    }
});

module.exports = router;

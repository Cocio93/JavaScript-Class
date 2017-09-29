var express = require('express');
var router = express.Router();
var path = require("path");
var jokeModel = require('../../model/jokes.js');

router.get('/', function(req, res, next) {
    res.send({ jokes: jokeModel.jokes.allJokes});
  });

router.get('/random', function(req, res, next) {
    randomJoke = jokeModel.jokes.getRandomJoke();
    res.send({ joke: randomJoke });
});

router.post('/', function(req, res, next) {
    var joke = req.body.joke;
    jokeModel.jokes.addJoke(joke);
    res.send({ joke: joke});
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    var jokes = jokeModel.jokes.allJokes;
    if (id > jokes.length) {
        res.status(500).send({error: 'Joke doesnt exist'});
    } else {
        req.body.joke = jokes[id];     
        res.send({joke: req.body.joke});
    }
});

router.post('/reset', function(req, tes, next) {
    jokeModel.jokes.resetJokes();
    next();
})

module.exports = router;

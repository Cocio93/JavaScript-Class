var expect = require("chai").expect;
var request = require("request");
var http = require("http");
var server;
var TEST_PORT = 3456;

before(function(done){
  var app = require('C:/Users/flutt/Documents/Programming/JavaScript Class/Period-2/Excercises/Problem-2/app.js');
  server = http.createServer(app);
  server.listen(TEST_PORT,function(){
    done();
  });
})
after(function(done){
  server.close();
  done();
})

var resetApi = function() {
  var options = {
    url: "http://localhost:" + TEST_PORT + "/api/jokes/reset",
    method: "POST",
    json: true
  }

  request(options, function (error, res, body) {
    console.log("Api was reset");
  });
}

describe("POST: /api/jokes ", function () {
  var options = {
    url: "http://localhost:" + TEST_PORT + "/api/jokes",
    method: "POST",
    json: true,
    body: {joke: "Its better to be late than to arrive ugly"}
  }

  it("Should respond with added joke if call succeeded", function (done) {
    request(options, function (error, res, body) {
      var addedJoke = body.joke;
      expect(addedJoke).to.be.equal("Its better to be late than to arrive ugly");
      done();
    });
  })

  resetApi();
});

describe("GET: /api/jokes", function() {
  var options = {
    url: "http://localhost:" + TEST_PORT + "/api/jokes",
    method: "GET",
    json: true
  }

  it("Should return array of the 3 initial jokes", function(done) {
    request(options, function(error, res, body) {
      var jokes = body.jokes;
      expect(jokes.length).to.be.equal(3);
      done();
    })
  })
})

describe("GET: /api/jokes/:id", function() {
  var id = 1;
  var options = {
    url: "http://localhost:" + TEST_PORT + "/api/jokes/" + id,
    method: "GET",
    json: true
  }

  // Not really the ID, but rather its location in the joke array
  it("Should return the joke with 'id' 1", function(done) {
    request(options, function(error, res, body) {
      var joke = body.joke;
      expect(joke).to.be.equal("At what age is it appropriate to tell my dog that he's adopted?");
      done();
    })
  })

  it("Should try to get non-existing joke, and return error", function(done) {
    options.url = "http://localhost:" + TEST_PORT + "/api/jokes/" + 9;
    request(options, function(error, res, body) {
      var errorMsg = body.error;
      var statusCode = res.statusCode;
      expect(errorMsg).to.be.equal("Joke doesnt exist");
      expect(statusCode).to.be.equal(500);
      done();
    })
  })
})

describe("GET: /api/jokes/random", function() {
  var options = {
    url: "http://localhost:" + TEST_PORT + "/api/jokes/random",
    method: "GET",
    json: true
  }

  it("Should return a random joke from the joke API", function(done) {
    var jokes = [
      "A day without sunshine is like, night.",
      "At what age is it appropriate to tell my dog that he's adopted?",
      "I intend to live forever, or die trying"
    ];
    
    request(options, function(error, res, body) {
      var joke = body.joke;
      expect(jokes).to.contain(joke);
      done();
    })
  })
})
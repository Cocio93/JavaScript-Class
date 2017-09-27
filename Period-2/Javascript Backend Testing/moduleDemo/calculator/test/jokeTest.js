var expect = require("chai").expect;
var request = require("request");
var http = require("http");
var app = require('C:/Users/flutt/Documents/Programming/JavaScript Class/Period-2/Excercises/Problem-2/app.js');
var server;
var TEST_PORT = 3456;

before(function(done){
  //var app = require('../app');
  server = http.createServer(app);
  server.listen(TEST_PORT,function(){
    done();
  });
})
after(function(done){
  server.close();
  done();
})

describe("GET: /jokes/:id ", function () {
  var options = {
    url: "http://localhost:" + TEST_PORT + "/jokes/0",
    method: "GET",
    json: true
  }

  it("Should get a random joke", function (done) {
    request(options, function (error, res, body) {
      expect(body.joke).to.be.equal("A day without sunshine is like, night.");
      //You should also check whether the joke actually was added to the Data-store
      done();
    });
  })
});
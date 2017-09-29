var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
  ];

var _addJoke = function(joke) {
    jokes.push(joke);   
}

var _getRandomJoke = function() {
    var r = Math.floor((Math.random() * module.exports.jokes.allJokes.length) + 0 );
    return module.exports.jokes.allJokes[r]
}

var _resetJokes = function() {
    module.exports.jokes.allJokes = [
        "A day without sunshine is like, night.",
        "At what age is it appropriate to tell my dog that he's adopted?",
        "I intend to live forever, or die trying"
      ];
      console.log("jokes were reset");
      
}

module.exports.jokes = {
    allJokes : jokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke,
    resetJokes: _resetJokes
  }
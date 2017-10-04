var myModule = require("../lib/myModule.js")
var expect = require("chai").expect;


describe('Asynctesting', function () {
    it('should pass if when finding the right files', function (done) {
        
        
        var directory = './test';
        var filter = 'js';
        var filecount = [];
        var callback = function(error, filtered) {
            if (error) {
              console.log('error');
              done(err);
            }
            for (var index in filtered) {
                console.log("Files : " + filtered[index]);
              var data = filtered[index];
              filecount.push(data);
            }
            
            return filecount.length;
          };
          
          var result =  done(myModule.SearchDir(directory, filter, callback));  // done over udtrykket du vil vente pÃ¥
          assert.equal(result,4);
          
        
    })
})
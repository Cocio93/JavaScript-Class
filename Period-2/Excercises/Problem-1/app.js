var path = require('path');
var express = require("express");
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));


app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){
    var operation = req.params.operation;
    var operationSign = '';
    var n1 = Number(req.params.n1), n2 = Number(req.params.n2);
    var result = 0;
    
    if (operation == 'add') {
        result = n1+n2;
        operationSign = '+';
    } else
    if (operation == 'minus') {
        result = n1-n2;
        operationSign = '.';
    } else 
    if (operation == 'divide') {
        result = n1 / n2;
        operationsign = '/';
    } else 
    if (operation == 'multiply' ){
        result = n1 * n2;
        operationSign = '*';
    }

    var calculatorRequest = {
        operationSign: operationSign,
        result: result,
        n1: n1,
        n2: n2
      }

      res.render('calculator', calculatorRequest);
    })    

app.get('/', function(req, res) {
        res.send('DAMN');
});

app.get("/api/calculator/*",function(req,res){
      res.send("damn");  
    })

app.listen(3000,function(){
  console.log("Server started, listening on: "+3000);
})


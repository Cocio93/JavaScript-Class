var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require("express-session");
var bodyParser = require('body-parser');
var stylus = require('stylus');
var index = require('./routes/index');
var jokes = require('./routes/jokes');
var jokesApi = require('./routes/api/jokes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(cookieParser());
app.use(session({secret:'secret_3162735',saveUninitialized:true, resave: true}));

app.use('/jokes', function isAuthenticated(req, res, next) {
  if(!req.session.userName) {
    res.redirect("/");
 } else {
    next();
  }});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/jokes', jokes);
app.use("/api/jokes", jokesApi)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  next();
});



module.exports = app;

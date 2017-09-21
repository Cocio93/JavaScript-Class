var logger = require('morgan');
var router = require('./routes');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var path = require('path');
var express = require('express');

// Get server obejct and set view engine 
var app = express();
app.set('views', path.join(__dirname, 'views'));//Actually the default view folder
app.set('view engine', 'pug');//allow us to leave out the extension

// Setting up middleware pipeline 
app.use(favicon(path.join(__dirname, 'public','images','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

// Error Handling
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      console.log("Error Occured");
      res.render('error', { message: err.message, error: err });
      throw new Error("UPPS");
  
    });
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log("Error Occured");
    res.render('error', { message: err.message, error: err });
  });
 
  
module.exports= app;


var express = require('express');
var router = express.Router();

// Index Page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'John\'s website' });
});

// Name Form
names = [];
router.get('/form', function(req, res, next) {
    res.render('form', { names: names});
});

router.post('/form', function (req, res) {
    if (req.body.status == 'add') {
        names.push(req.body.name);
        res.redirect('/form');
    } else 
    if (req.body.status == 'remove') {
        names = [];
        res.redirect('/form');
    } else {
        res.redirect('/form');
    }
});

module.exports = router;

var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    console.log('URL: ' + req.url);
    next();
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api', function (req, res) {
    res.json({ firstname: 'Brian', lastname: 'Do', occupation: 'GOAT' });
});

app.get('/whoisthegoat/', function (req, res) { // query string
    res.render('goat', {NAME: req.query.name});
});

app.get('/person/:id', function (req, res) {
    res.render('person', {ID: req.params.id});
});

app.post('/person', urlencodedParser, function (req, res) {
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.listen(port);
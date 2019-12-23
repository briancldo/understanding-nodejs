var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Welcome to my site!');
});

app.get('/api', function (req, res) {
    res.json({firstname: 'Brian', lastname: 'Do', occupation: 'GOAT'});
});

app.get('/whoisthegoat', function (req, res) {
    res.send(fs.readFileSync('./index.html', 'utf8'));
});

app.listen(port);
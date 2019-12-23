var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Welcome to my site!');
});

app.get('/api', function (req, res) {
    res.json({ firstname: 'Brian', lastname: 'Do', occupation: 'GOAT' });
});

app.get('/whoisthegoat', function (req, res) {
    res.send(fs.readFileSync('./whoisthegoat.html', 'utf8'));
});

app.get('/person/:id', function (req, res) {
    res.send('Person id: ' + req.params.id);
});

app.listen(port);
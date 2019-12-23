var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index', {title: 'Brian Do is the goat',
                         heading: 'he\'s also a lion'});
});

app.listen(port);
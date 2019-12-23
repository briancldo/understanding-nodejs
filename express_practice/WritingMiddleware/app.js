var express = require('express');
var app = express();

var port = 3000;

// declaring logging middleware
function logger(req, res, next) {
    console.log('Logged');

    next();
}

// declaring timestamp middleware
function timestamp(req, res, next) {
    req.timestamp = Date.now();
    console.log('we are in timestamp');

    next();
}

// using logging middleware
app.use(logger, timestamp);

app.get('/', function (req, res) {
    res.send('Response sent at ' + req.timestamp);
});

app.listen(port);
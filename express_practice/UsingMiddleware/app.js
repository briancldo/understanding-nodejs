var express = require('express');
var app = express();

app.get('/user/:id', function(req, res, next) {
    if(req.params.id === '0') next('route');
    else next();
}, function(req, res) {
    res.send('regular response');
});

app.get('/user/:id', function(req, res) {
    res.send('special response');
});

app.listen(3000);
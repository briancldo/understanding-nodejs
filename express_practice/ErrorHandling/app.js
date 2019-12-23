var express = require('express');
var app = express();
var fs = require('fs');

var port = 3000;

/* if code in synchronous code and middleware throws an error,
express will handle it. */
app.get('/sync', function (req, res) {
    throw new Error('err');

    res.send('test');
});

/* errors that occur in asynchronous functions and middleware,
pass them to the next() function. Express will catch and process them*/
app.get('/async', function (req, res, next) {
    fs.readFile('/file-does-not-exist', function (err, data) {
        if(err)
            next(err); // passes error to next middleware
        else
            res.send(data);
    }, function (err, req, res, next) {
        console.log(err);
    });
});

app.listen(port);
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    var message = 'Brian Do is the GOAT';
    html = html.replace('{message}', message);
    res.end(html);

}).listen(8080, '127.0.0.1');


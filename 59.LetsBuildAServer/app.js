var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n'); // end means 'I'm done sending; this is the last thing I'm sending'

}).listen(8080, '127.0.0.1');
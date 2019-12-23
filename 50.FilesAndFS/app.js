var fs = require('fs');

var message1 = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(message1);

fs.readFile(__dirname + '/greet.txt', 'utf8',
    function (err, data) {
        console.log(data);
    });

console.log('Done');
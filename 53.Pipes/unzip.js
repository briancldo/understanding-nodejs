/* the unzip program had to be separate to the app.js file
because node.js is asynchronous and it is possible that the
file uncompress is attempted before the compression is completed.
This may be the reason for the end of file error */

var fs = require('fs');
var zlib = require('zlib');

var gunzip = zlib.createGunzip();
var writeuncomp = fs.createWriteStream(__dirname + '/loremuncomp.txt');
var readcomp = fs.createReadStream(__dirname + '/loremcomp.gz');

readcomp.pipe(gunzip).pipe(writeuncomp);
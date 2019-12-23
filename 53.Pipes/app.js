var fs = require('fs'); // file system
var zlib = require('zlib');

// creates read stream with lorem.txt
var readable = fs.createReadStream(__dirname + '/lorem.txt',
{ encoding: 'utf8', highWaterMark: 1024 });
/* by default, the buffer is 64KB. We can change it by using the
'highWaterMark' option. Here, we read the data in 1 KB, or 1024 byte,
chunks */

//creates write stream with loremcopy.txt
var writable = fs.createWriteStream(__dirname + '/loremcopy.txt');

//establishes a pipe from the read stream to the write stream.
readable.pipe(writable);

// creating compression object
var gzip = zlib.createGzip();
var writecomp = fs.createWriteStream(__dirname + '/loremcomp.gz');

readable.pipe(gzip).pipe(writecomp);


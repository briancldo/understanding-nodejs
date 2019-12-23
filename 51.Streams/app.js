var fs = require('fs'); // file system

// creates read stream with lorem.txt
var readable = fs.createReadStream(__dirname + '/lorem.txt',
{ encoding: 'utf8', highWaterMark: 1024 });
/* by default, the buffer is 64KB. We can change it by using the
'highWaterMark' option. Here, we read the data in 1 KB, or 1024 byte,
chunks */

//creates write stream with loremcopy.txt
var writable = fs.createWriteStream(__dirname + '/loremcopy.txt');

// 'data' is the event name for when data has filled the stream buffer
readable.on('data', function (chunk) { // the callback function takes a chunk: a piece of data sent through a stream
    console.log(chunk);
    writable.write(chunk); //sending the chunk down the write to loremcopy.txt stream
});

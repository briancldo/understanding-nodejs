var buf = new Buffer('Hello', 'utf8'); // no need to import; Buffer is global
// creates buffer of size of string 'Hello'. Character encoding is utf8 by defaut

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]); // access elements like an array

buf.write('wo'); // overwrites buffer, not append
console.log(buf.toString());

// when string to write is longer than the buffer, it only writes
// the part that can fit; no buffer overflow
buf.write('stringlongerthanthebuffer');
console.log(buf.toString());

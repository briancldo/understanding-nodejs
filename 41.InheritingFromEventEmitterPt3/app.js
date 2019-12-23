var Emitter = require('events');
var Greeter = require('./greeter');

var grtr = new Greeter();

grtr.on('greet', function (name) {
    console.log(this.greeting + ' said ' + name);
});

grtr.greet();
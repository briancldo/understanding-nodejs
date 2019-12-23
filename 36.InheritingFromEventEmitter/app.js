var Emitter = require('events');
var util = require('util');

// function constructor for greeter objects
function Greeter() {
    this.greeting = "Yoyoyo it's Javale Magee";
    this.name = 'Brian Do';
}

// this means that Greeter inherits Emitter
util.inherits(Greeter, Emitter);

Greeter.prototype.greet = function () {
    console.log('About to emit... ' + this.name);
    this.emit('greet', this.name);
}

var grtr = new Greeter();

grtr.on('greet', function (name) {
    console.log(this.greeting + ' said ' + name);
});

grtr.greet();
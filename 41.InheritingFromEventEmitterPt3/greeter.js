'use strict';

var Emitter = require('events');

module.exports =
class Greeter extends Emitter {
    constructor() { //equivilent to function constructor
        super();

        this.greeting = "Yoyoyo it's Javale Magee";
        this.name = 'Brian Do';
    }

    greet() { // in prototype
        console.log('About to emit... ' + this.name);
        this.emit('greet', this.name);
    }
}
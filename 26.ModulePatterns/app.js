/* Pattern 1: replacing the empty module.exports object
 with a function */
var greet1 = require('./greet1');
greet1();

/* Pattern 2: adding a function onto the empty
module.exports object */
var greet2 = require('./greet2');
greet2.greet(); // import object containing function

var greet2b = require('./greet2').greet;
greet2b(); // import function itself

// Pattern 3: exporting an object using a function constructor
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'New hello3'; // will this change future imports?

// let's find out by importing again
var greet3b = require('./greet3');
greet3.greet();
/* It DOES change it! This is because the require function
has a cache of past requires. If the same module is 
imported again, it simply returns the same thing.
So in this case, it returned the same exact object,
which had the changed greeting message. */

// exporting the function constructor itself to avoid prior situation
var greet4 = new (require('./greet4'))();
greet4.greet();

/* Revealing Module Pattern: when exporting a module,
you can choose which properties to include and which to
exclude */
var greet5 = require('./greet5');
greet5.greet();
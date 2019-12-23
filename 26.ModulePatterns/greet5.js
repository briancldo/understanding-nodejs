// Revealing Module Pattern

// by not putting this variable in the exports, it is
// inaccessible by files that import this module
var greeting = 'Hello5';

module.exports = {
    greet: function () {
        console.log(greeting);
    }
}
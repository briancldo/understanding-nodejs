var firstname = 'Jane';
var testparam = 'will this pass?';

(function (param) {
    var firstname = 'John';
    console.log(firstname);
    
    console.log(param);
}(testparam));
// lesson: these immediately invoked function expressions
// (IIFE) will take variables from the outside. Which,
// of course, agrees with the rules of scope.

console.log(firstname);
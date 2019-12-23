var Greetr = function () {
    this.greeting = 'Hello4';
    this.greet = function () {
        console.log(this.greeting);
    }
};

module.exports = Greetr;
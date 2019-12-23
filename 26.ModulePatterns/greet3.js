var Greetr = function () {
    this.greeting = 'Hello3';
    this.greet = function () {
        console.log(this.greeting);
    }
};

module.exports = new Greetr();
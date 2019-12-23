// define an object using literal notation
var person = {
    firstname: '',
    lastname: '',
    greet: function () {
        // the this operator is necessary to specify that the properties are of the current object
        return this.firstname + ' ' + this.lastname;
    }
};

//using the object literal (person) to create a new object
var john = Object.create(person);
john.firstname = 'John'; // manually assign object properties
john.lastname = 'Doe'; // these assignments shadow those of the object prototype ('' in this case)

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());
// passing callback function; when this function finishes its
// work, it will invoke the callback function
function greet(callback) {
    console.log('Hello mate');
    data = {
        name: 'Brian Do'
    }

    callback(data);
}

greet(function (data) {
    console.log('We are in the callback function');
    console.log(data);
});

greet(function (data) {
    console.log('We are in the second callback function');
    console.log(data.name);
});
var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet', function () {
    console.log('The first hello');
});

emtr.on('greet', function () {
    console.log('Yet annnoootthher hello');
});

emtr.emit('greet');
const fs = require('fs');

fs.open(__filename, 'r', function(err, content) {
    console.log('IO');
});

setImmediate(function() {
  console.log('setImmediate cb');
});

process.nextTick(function() {
  console.log('nextTick cb');
});

console.log('start');


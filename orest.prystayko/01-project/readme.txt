WS settings

nodeJS (scope project)
JS (ES2015)
JShint (.jshintrc)
======

curl
======

module.export
global
module.parent

../../node_modules or package.json

update
npm up

delete
npm r

publish
npm pu
======

npm i -g node-inspector, nodemon

nodemon filename
node-inspector

node --debug-brk fileName
node debug fileName
======

http.Server > net.Server > events.EventEmitter

conts emit = require('event').prototype.emit;
require('event').prototype.emit = function(e) {
  console.log(e); //listen for events

  return emit.apply(this, arguments);
}
======

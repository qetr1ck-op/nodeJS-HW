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
======

npm i -g node-inspector, nodemon

debegger;
node debug [filename] (repl)


nodemon [filename]
node-inspector

node --debug-brk [filename]
node-debug [filename]
======

http.Server > net.Server > events.EventEmitter

conts emit = require('event').prototype.emit;
require('event').prototype.emit = function(e) {
  console.log(e); //listen for events

  return emit.apply(this, arguments);
}
======

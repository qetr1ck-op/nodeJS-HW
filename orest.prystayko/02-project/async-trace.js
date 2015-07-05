require('trace');
require('clarify');

function f (ms) {
  setTimeout(function() {
    throw Error('Babah');
  }, ms)
}

function g () {
  f(10);
}

g();
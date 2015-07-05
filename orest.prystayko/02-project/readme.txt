Node.JS = V8 + LibUV + own functions + ...

LibUV - event loop of Node.JS

while (do we have handlers (watchers)) {
    JS -> IO, timers -> ... JS -> IO, timers -> ...
}

======
ref/unref

setImmediata(cb)//after IO

process.nextTick(cb)//before IO

======

require('trace');
require('clarify');

NODE_ENV

======
config module



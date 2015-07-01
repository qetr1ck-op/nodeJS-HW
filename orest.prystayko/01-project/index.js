"use strict";

const http = require('http'),
    request = require('request');

const port = 1338,
    ip = '127.0.0.1';

const server = new http.Server(function(req, res) {
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.end('Hello World!');
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

//curl -D - --data "param1=value1&param2=value2" http://127.0.0.1:1338/

request.post(
    'http://' + ip + ':' + port,
    { form: { key: 'value' } },
    function (error, response, body) {
        console.log(response.statusCode); //404
        console.log(body); //Page not found
    }
);

request.put('http://' + ip + ':' + port,
    function (error, response, body) {
    console.log(response.statusCode); //404
    console.log(body); //Page not found
});

server.listen(port, ip);
console.log('listen on port ' + port);

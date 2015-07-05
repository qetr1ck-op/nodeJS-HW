'use strict'

const config = require('config'),
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    mime = require('mime-types');

const http = require('http');

const server = new http.createServer(function(res, req) {
    const urlParsed = url.parse(res.url);

    const filePath = path.join(config.publicRoot, urlParsed.pathname);
    //TODO: to module
    fs.readFile(filePath, function(err, content) {
        if (err) {
            res.statusCode = 404;
            return req.end('File not found');
        }

        req.setHeader('Content-Type', mime.lookup(urlParsed.pathname));
        res.statusCode = 200;
        req.end(content);
    })

}).listen(1337);

console.log('Server up and run on 1337');
"use strict";

const http = require("http");
const fs = require("fs");

var cache = {};

http.createServer(function(req, res) {
    var url = req.url == "/" ? "./index.html" : "." + req.url;

    function respond(buffer) {
        if (buffer == null) {
            res.statusCode = 404;
            res.end();
        } else {
            res.writeHeader(200);
            res.end(buffer);
        }
    }

    if (cache[url] == undefined)
        fs.readFile(url, function(error, buffer) {
            respond(cache[url] = error ? null : buffer);
        });
    else
        respond(cache[url]);
}).listen(80);

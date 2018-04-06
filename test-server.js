'use strict';

var express = require('express');
var trueLogger = require('./index');
var app = express();

var port = process.env.PORT || 3000;

app.use(trueLogger({level:'full'}));

app.listen(port, function () {
    console.log("Server is running on " + port);
});

app.get('/', function (req, res) {
    res.status(200);
    res.send("Done");
});

app.get('/books', (req, res) => {
    res.status(500);
    res.send("Interenal server error");
});
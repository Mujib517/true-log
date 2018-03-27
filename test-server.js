var express = require('express');
var trueLogger = require('./index');
var app = express();

var port = process.env.PORT || 3000;

app.use(trueLogger);

app.listen(port, function () {
    console.log("Server is running on " + port);
});

app.get('/', function (req, res) {
    res.send("Done");
});
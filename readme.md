# True Log  
## An Http Request Logger
<img src="https://badge.fury.io/js/true-log.svg"/>
<img src="https://travis-ci.org/Mujib517/true-logger.svg?branch=master"/>
 
## Installation
    npm install true-log --save

## Integration
    var express = require('express');
    var trueLog = require('true-log');
    var app = express();

    var port = process.env.PORT || 3000;

    //register it as a middleware
    app.use(trueLog);

    app.listen(port, function () {
        console.log("Server is running on " + port);
    });

    app.get('/', function (req, res) {
        res.send("True logger works");
    });

# True Logger  
## Http Request Logger
<img src="https://travis-ci.org/Mujib517/true-logger.svg?branch=master"/>
 
## Instalation
    npm install true-logger --save

## Integration
    var express = require('express');
    var trueLogger = require('true-logger');
    var app = express();

    var port = process.env.PORT || 3000;

    //register it as a middleware
    app.use(trueLogger);

    app.listen(port, function () {
        console.log("Server is running on " + port);
    });

    app.get('/', function (req, res) {
        res.send("True logger works");
    });
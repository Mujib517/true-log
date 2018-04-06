# True Log  
## An Http Request Logger
<img src="https://badge.fury.io/js/true-log.svg"/>
<img src="https://travis-ci.org/Mujib517/true-logger.svg?branch=master"/>
 
## Installation
    npm install true-log --save

## Integration
```javascript
    var express = require('express');
    var trueLog = require('true-log');
    var app = express();

    var port = process.env.PORT || 3000;

    //register it as a middleware
    app.use(trueLog());
    
    app.listen(port, function () {
        console.log("Server is running on " + port);
    });

    app.get('/', function (req, res) {
        res.send("True logger works");
    });
```

## Log Level
### Tiny
```javascript
 var trueLog = require('true-log');
 app.use(trueLog({level:'tiny'}));
```
 Logs: Client IP, Date, Method, Url, UserAgent  

### Full
```javascript
 app.use(trueLog({level:'full'}));
```
 Logs: Client IP, Date, Method, Url, UserAgent, Response Time and Status code

 ## Logging to File
 By default logs would be written to console but you can redirect logs to a file by passing a writeable stream
  
  ```javascript
  var ws = fs.createWriteStream(__dirname + "/log.txt", { flags: 'a' });
  app.use(trueLog({level:'full',stream:ws}));
  ```
var fs = require('fs');

module.exports = function writeLog(res) {
    if (res.config && res.config.stream) writeToFile(res);
    else logToConsole(res);

    cleanup(res);
};

function cleanup(res) {
    delete res.__startTime;
    delete res.logObject;
    delete res.config;
}

function logToConsole(res) {
    var red = '\x1b[31m';
    var green = '\x1b[32m';
    var blue = '\x1b[34m';
    var color;

    if (res.logObject) {
        if (res.logObject.status >= 200 && res.logObject.status < 300) {
            color = green;
        }
        else if (res.logObject.status >= 300 && res.logObject.status < 400) {
            color = blue;
        }
        else if (res.logObject.status >= 400 && res.logObject.status < 600) {
            color = red;
        }
    }
    console.log(color, JSON.stringify(res.logObject));
}

function writeToFile(res) {
    var stream = res.config.stream;
    stream.write(JSON.stringify(res.logObject));
}
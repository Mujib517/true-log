module.exports = function writeLog(res) {
    logToConsole(res);

    cleanup(res);
};

function cleanup(res) {
    delete res.__startTime;
    delete res.logObject;
}

function logToConsole(res) {
    var red = '\x1b[31m';
    var green = '\x1b[32m';
    var blue = '\x1b[34m';

    if (res.logObject) {
        if (res.logObject.status >= 200 && res.logObject.status < 300) {
            console.log(green, JSON.stringify(res.logObject));
        }
        else if (res.logObject.status >= 300 && res.logObject.status < 400) {
            console.log(blue, JSON.stringify(res.logObject));
        }
        else if (res.logObject.status >= 400 && res.logObject.status < 600) {
            console.log(red, JSON.stringify(res.logObject));
        }
    }
}
'use strict';

var onHeaders = require('on-headers');
var onFinished = require('on-finished');

function trueLogger(config) {

    config = config || 'tiny';

    return function (req, res, next) {

        captureStartTime.call(res);

        var logObject = {
            userAgent: req.headers['user-agent'],
            url: req.url,
            method: req.method,
            host: req.headers.host,
            date: new Date(),
            ip: getClientIP(req),
            date: getDate()
        };

        res.logObject = logObject;

        onFinished(res, captureEndTime);
        switch (config) {
            case 'tiny':
                break;
            case 'full':
                break;
        }
        next();
    }
}

function getClientIP(req) {
    return req.ip || req._remoteAddress || (req.connection && req.connection.remoteAddress) || "";
}

function getDate() {
    return new Date().toLocaleString();
}

function captureStartTime() {
    console.log(this.objtype, "start time");
    this.__startTime = new Date();
}

function captureEndTime(err, res) {
    var time = new Date() - res.__startTime;
    res.logObject.responseTime = time + "ms";
    console.log(res.logObject);
    delete res.logObject;
}


module.exports = trueLogger;
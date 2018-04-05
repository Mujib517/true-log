'use strict';

var onFinished = require('on-finished');
var helpers = require('./helpers');
var writeLog = require('./writer');

function trueLogger(config) {

    config = config || 'tiny';

    return function (req, res, next) {

        var logObject = {
            ip: helpers.getClientIP(req),
            url: req.url,
            method: req.method,
            date: new Date(),
            userAgent: req.headers['user-agent'],
            date: helpers.getDate()
        };
        res.logObject = logObject;

        switch (config) {
            case 'tiny':
                writeLog(res);
                break;
            case 'full':
                helpers.captureStartTime.call(res);
                logObject.host = req.headers.host;
                onFinished(res, helpers.captureEndTime);
                break;
        }
        next();
    }
}


module.exports = trueLogger;
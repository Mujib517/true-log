'use strict';

var onFinished = require('on-finished');
var helpers = require('./helpers');
var writeLog = require('./writer');

function trueLogger(config) {

    config = config || { level: 'tiny' };
    
    config.level = config.level || 'tiny';

    return function (req, res, next) {

        var logObject = {
            ip: helpers.getClientIP(req),
            url: req.url,
            method: req.method,
            userAgent: req.headers['user-agent'],
            date: helpers.getDate()
        };
        res.logObject = logObject;
        res.config = config;

        switch (config.level) {
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
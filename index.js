'use strict';

function trueLogger(config) {

    config = config || 'tiny';

    return function (req, res, next) {
        var logObject = {
            userAgent: req.headers['user-agent'],
            url: req.url,
            method: req.method,
            host: req.headers.host,
            date: new Date(),
            ip: getClientIP(req),
            date: getDate()
        };

        switch (config) {
            case 'tiny':
                console.log(logObject);
                break;
            case 'full':
                console.log(logObject);
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


module.exports = trueLogger;
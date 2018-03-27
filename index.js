'use strict';

function trueLogger(config) {

    config = config || 'tiny';

    return function (req, res, next) {
        var logObject = {};

        switch (config) {
            case 'tiny':
                logObject.userAgent = req.headers['user-agent'];
                logObject.url = req.url;
                logObject.method = req.method;
                logObject.host = req.headers.host;
                logObject.date = new Date();
                console.log(logObject);
                break;
            case 'full':
                logObject.userAgent = req.headers.userAgent;
                logObject.url = req.url;
                logObject.method = req.method;
                logObject.host = req.headers.host;
                logObject.date = new Date();
                console.log(logObject);
        }
        next();
    }
}


module.exports = trueLogger;
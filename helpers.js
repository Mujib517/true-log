'use strict';

var writeLog = require('./writer');

module.exports = {
    getClientIP: function (req) {
        return req.ip || req._remoteAddress || (req.connection && req.connection.remoteAddress) || "";
    },

    getDate: function () {
        return new Date().toLocaleString();
    },

    captureStartTime: function () {
        this.__startTime = new Date();
    },

    captureEndTime: function (err, res) {
        var time = new Date() - res.__startTime;
        res.logObject.responseTime = time + "ms";
        res.logObject.status = res.statusCode;

        writeLog(res);
    }
};




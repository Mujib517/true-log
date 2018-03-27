'use strict';

function trueLogger(req, res, next) {
    console.log("true logger in action");
    next();
}

module.exports = trueLogger;
module.exports = function writeLog(res) {
    console.log(JSON.stringify(res.logObject));
    cleanup(res);
};

function cleanup(res) {
    delete res.__startTime;
    delete res.logObject;
}